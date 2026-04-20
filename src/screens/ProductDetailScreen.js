import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { getProductById } from '../services/api';
import { COLORS, SHADOWS } from '../theme/colors';
import { formatPrice, translateCategory } from '../utils/helpers';

export default function ProductDetailScreen({ route, navigation }) {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setErrorMsg('');
      try {
        const data = await getProductById(productId);
        setProduct(data);
      } catch (error) {
        setErrorMsg(error.message || 'Erro ao carregar produto.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Carregando detalhes...</Text>
      </View>
    );
  }

  if (errorMsg || !product) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorIcon}>⚠️</Text>
        <Text style={styles.errorText}>{errorMsg || 'Produto não encontrado.'}</Text>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => {
            setLoading(true);
            getProductById(productId)
              .then((data) => { setProduct(data); setLoading(false); })
              .catch((err) => { setErrorMsg(err.message); setLoading(false); });
          }}
        >
          <Text style={styles.retryText}>Tentar Novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Imagem do produto */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Badge de categoria */}
      <View style={styles.categoryBadge}>
        <Text style={styles.categoryText}>
          {translateCategory(product.category)}
        </Text>
      </View>

      {/* Nome */}
      <Text style={styles.productName}>{product.title}</Text>

      {/* Preço */}
      <View style={styles.priceContainer}>
        <Text style={styles.priceLabel}>Preço</Text>
        <Text style={styles.price}>{formatPrice(product.price)}</Text>
      </View>

      {/* Avaliação */}
      {product.rating && (
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingStars}>
            {'★'.repeat(Math.round(product.rating.rate))}
            {'☆'.repeat(5 - Math.round(product.rating.rate))}
          </Text>
          <Text style={styles.ratingText}>
            {product.rating.rate.toFixed(1)} / 5  •  {product.rating.count} avaliações
          </Text>
        </View>
      )}

      {/* Divider */}
      <View style={styles.divider} />

      {/* Descrição */}
      <Text style={styles.descriptionTitle}>Descrição</Text>
      <Text style={styles.description}>{product.description}</Text>

      {/* Botão voltar */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <Text style={styles.backButtonText}>← Voltar à listagem</Text>
      </TouchableOpacity>
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
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: 24,
  },
  loadingText: {
    color: COLORS.textSecondary,
    marginTop: 16,
    fontSize: 14,
  },
  errorIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  errorText: {
    color: COLORS.error,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    ...SHADOWS.green,
  },
  retryText: {
    color: COLORS.background,
    fontWeight: '800',
    fontSize: 14,
  },
  // Imagem
  imageContainer: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.primaryBorder,
    ...SHADOWS.green,
  },
  image: {
    width: '100%',
    height: 240,
  },
  // Categoria
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.primaryGlow,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.primaryBorder,
    ...SHADOWS.greenSubtle,
  },
  categoryText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  // Nome
  productName: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    marginBottom: 16,
  },
  // Preço
  priceContainer: {
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.primaryBorder,
    ...SHADOWS.green,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: {
    color: COLORS.textSecondary,
    fontSize: 13,
    fontWeight: '600',
  },
  price: {
    color: COLORS.primary,
    fontSize: 24,
    fontWeight: '900',
    textShadowColor: COLORS.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  // Avaliação
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
    backgroundColor: COLORS.surface,
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    ...SHADOWS.greenSubtle,
  },
  ratingStars: {
    color: '#ffd700',
    fontSize: 16,
  },
  ratingText: {
    color: COLORS.textSecondary,
    fontSize: 13,
  },
  // Divider
  divider: {
    height: 1,
    backgroundColor: COLORS.primaryBorder,
    marginVertical: 20,
  },
  // Descrição
  descriptionTitle: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  description: {
    color: COLORS.textSecondary,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 32,
  },
  // Botão voltar
  backButton: {
    borderWidth: 1.5,
    borderColor: COLORS.primaryBorder,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    ...SHADOWS.greenSubtle,
  },
  backButtonText: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: '700',
  },
});
