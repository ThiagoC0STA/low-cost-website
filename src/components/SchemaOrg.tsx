export function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Site Barato',
    description: 'Para quem não pode pagar R$ 3 mil em agência. Site profissional em até 2 dias. Pagamento único a partir de R$ 300.',
    url: 'https://sitebarato.com.br',
    telephone: '+55-41-99174-1000',
    email: 'contato@sitebarato.com.br',
    priceRange: 'R$300 - R$850',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressRegion: 'PR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '200',
      bestRating: '5',
    },
    offers: {
      '@type': 'Offer',
      price: '500',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      description: 'Site profissional - pagamento único - plano mais popular',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
