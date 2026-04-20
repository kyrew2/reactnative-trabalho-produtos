import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { getUsers, login } from '../services/api';
import { COLORS, SHADOWS } from '../theme/colors';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      setErrorMsg('Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      // Passo 1: busca usuários existentes na API para validar
      const users = await getUsers();
      const userExists = users.find(
        (u) =>
          u.username.toLowerCase() === username.trim().toLowerCase()
      );

      if (!userExists) {
        setErrorMsg('Usuário não encontrado. Verifique o username.');
        setLoading(false);
        return;
      }

      // Passo 2: tenta autenticar com o endpoint de login
      await login(username.trim(), password.trim());

      // Sucesso: navega para Home
      navigation.replace('Home');
    } catch (error) {
      setErrorMsg(error.message || 'Erro ao realizar login. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleShowUsers = async () => {
    try {
      const users = await getUsers();
      const userList = users.map((u) => `• ${u.username} / ${u.password}`).join('\n');
      Alert.alert(
        'Usuários Disponíveis',
        `Use um dos seguintes:\n\n${userList}`,
        [{ text: 'OK' }]
      );
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar a lista de usuários.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo / Header */}
        <View style={styles.headerContainer}>
          <View style={styles.logoBox}>
            <Text style={styles.logoIcon}>🛍️</Text>
          </View>
          <Text style={styles.title}>FakeStore</Text>
          <Text style={styles.subtitle}>Faça login para continuar</Text>
        </View>

        {/* Card de Login */}
        <View style={styles.card}>
          {/* Campo Username */}
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Digite seu username"
              placeholderTextColor={COLORS.textMuted}
              value={username}
              onChangeText={(text) => {
                setUsername(text);
                setErrorMsg('');
              }}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Campo Password */}
          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor={COLORS.textMuted}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setErrorMsg('');
              }}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          {/* Mensagem de erro */}
          {errorMsg !== '' && (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>⚠️ {errorMsg}</Text>
            </View>
          )}

          {/* Botão de login */}
          <TouchableOpacity
            style={[styles.loginButton, loading && styles.loginButtonDisabled]}
            onPress={handleLogin}
            disabled={loading}
            activeOpacity={0.8}
          >
            {loading ? (
              <ActivityIndicator color={COLORS.background} size="small" />
            ) : (
              <Text style={styles.loginButtonText}>ENTRAR</Text>
            )}
          </TouchableOpacity>

          {/* Botão auxiliar – ver usuários */}
          <TouchableOpacity
            style={styles.helpButton}
            onPress={handleShowUsers}
            activeOpacity={0.7}
          >
            <Text style={styles.helpButtonText}>Ver usuários disponíveis</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          Dados fornecidos por Fake Store API
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 36,
  },
  logoBox: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: COLORS.primaryBorder,
    ...SHADOWS.greenStrong,
  },
  logoIcon: {
    fontSize: 38,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.primary,
    letterSpacing: 2,
    textShadowColor: COLORS.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 6,
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: COLORS.primaryBorder,
    ...SHADOWS.green,
  },
  label: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  inputWrapper: {
    marginBottom: 20,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: COLORS.primaryBorder,
    backgroundColor: COLORS.surfaceElevated,
    ...SHADOWS.greenSubtle,
  },
  input: {
    color: COLORS.text,
    fontSize: 15,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
  },
  errorBox: {
    backgroundColor: COLORS.errorGlow,
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.error,
  },
  errorText: {
    color: COLORS.error,
    fontSize: 13,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 4,
    ...SHADOWS.greenStrong,
  },
  loginButtonDisabled: {
    opacity: 0.6,
  },
  loginButtonText: {
    color: COLORS.background,
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 2,
  },
  helpButton: {
    alignItems: 'center',
    marginTop: 16,
    padding: 8,
  },
  helpButtonText: {
    color: COLORS.textSecondary,
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  footer: {
    textAlign: 'center',
    color: COLORS.textMuted,
    fontSize: 12,
    marginTop: 32,
  },
});
