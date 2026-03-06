export function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Site Barato',
    description: 'Site profissional sem enrolação. Para pequenos negócios e MEIs. Entrega em até 2 dias após coleta das informações. Pagamento único a partir de R$ 300.',
    url: 'https://sitebarato.com.br',
    telephone: '+55-11-99999-9999',
    email: 'contato@sitebarato.com.br',
    priceRange: 'R$300 - R$850',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressRegion: 'SP',
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
