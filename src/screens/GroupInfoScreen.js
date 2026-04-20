import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { COLORS, SHADOWS } from '../theme/colors';

// ============================================================
// ⚠️  ATENÇÃO: Substitua os dados abaixo pelos dados reais
//     dos integrantes do seu grupo antes de entregar!
// ============================================================
const GROUP_MEMBERS = [
  {
    name: 'Nome Completo do Integrante 1',
    ra: 'RA: 00000001',
  },
  {
    name: 'Nome Completo do Integrante 2',
    ra: 'RA: 00000002',
  },
  {
    name: 'Nome Completo do Integrante 3',
    ra: 'RA: 00000003',
  },
  {
    name: 'Nome Completo do Integrante 4',
    ra: 'RA: 00000004',
  },
];

export default function GroupInfoScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header decorativo */}
      <View style={styles.headerCard}>
        <Text style={styles.emoji}>👨‍💻</Text>
        <Text style={styles.appTitle}>FakeStore App</Text>
        <Text style={styles.appSubtitle}>
          Trabalho de React Native – Consumo de API
        </Text>
        <View style={styles.divider} />
        <Text style={styles.description}>
          Aplicativo desenvolvido como trabalho acadêmico, consumindo dados da{' '}
          <Text style={styles.highlight}>Fake Store API</Text>. O app conta com
          autenticação, listagem e filtragem de produtos por categoria, visualização
          de detalhes e navegação com React Navigation.
        </Text>
      </View>

      {/* Seção de tecnologias */}
      <View style={styles.techSection}>
        <Text style={styles.sectionTitle}>🛠️ Tecnologias Utilizadas</Text>
        <View style={styles.techGrid}>
          {['React Native', 'Expo', 'React Navigation', 'Axios', 'JavaScript'].map(
            (tech) => (
              <View key={tech} style={styles.techBadge}>
                <Text style={styles.techText}>{tech}</Text>
              </View>
            )
          )}
        </View>
      </View>

      {/* Seção de membros */}
      <Text style={styles.sectionTitle}>👥 Integrantes do Grupo</Text>
      {GROUP_MEMBERS.map((member, index) => (
        <View key={index} style={styles.memberCard}>
          <View style={styles.memberAvatar}>
            <Text style={styles.memberAvatarText}>{index + 1}</Text>
          </View>
          <View style={styles.memberInfo}>
            <Text style={styles.memberName}>{member.name}</Text>
            <Text style={styles.memberRa}>{member.ra}</Text>
          </View>
        </View>
      ))}

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Dados fornecidos por{' '}
          <Text style={styles.highlight}>fakestoreapi.com</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  // Header card
  headerCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: COLORS.primaryBorder,
    ...SHADOWS.green,
  },
  emoji: {
    fontSize: 44,
    marginBottom: 12,
  },
  appTitle: {
    color: COLORS.primary,
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 1.5,
    textShadowColor: COLORS.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  appSubtitle: {
    color: COLORS.textSecondary,
    fontSize: 13,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.primaryBorder,
    marginBottom: 16,
  },
  description: {
    color: COLORS.textSecondary,
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
  },
  highlight: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  // Tecnologias
  techSection: {
    marginBottom: 24,
  },
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },
  techBadge: {
    backgroundColor: COLORS.primaryGlow,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: COLORS.primaryBorder,
    ...SHADOWS.greenSubtle,
  },
  techText: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '700',
  },
  // Seção títulos
  sectionTitle: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  // Cards de membros
  memberCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    ...SHADOWS.green,
  },
  memberAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.primaryGlow,
    borderWidth: 2,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    ...SHADOWS.greenSubtle,
  },
  memberAvatarText: {
    color: COLORS.primary,
    fontWeight: '900',
    fontSize: 16,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 2,
  },
  memberRa: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '600',
  },
  // Footer
  footer: {
    alignItems: 'center',
    marginTop: 24,
  },
  footerText: {
    color: COLORS.textMuted,
    fontSize: 12,
  },
});
