import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { COLORS, SHADOWS } from '../theme/colors';

const GROUP_MEMBERS = [
  {
    name: 'Pedro Henrique Piccoli Franceschi',
    ra: 'RA: 1137855',
  },
  {
    name: 'Guilherme Matte Embarach',
    ra: 'RA: 1137953',
  },
];

export default function GroupInfoScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
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
  sectionTitle: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
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
  footer: {
    alignItems: 'center',
    marginTop: 24,
  },
  footerText: {
    color: COLORS.textMuted,
    fontSize: 12,
  },
});
