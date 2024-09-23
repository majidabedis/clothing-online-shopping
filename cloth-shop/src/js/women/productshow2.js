const product = {
    name: 'Derees',
    price: '$160',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Women', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
      {
        src: '../../src/assets/women/w/2/full.webp',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: '../../src/assets/women/w/2/zommin.webp',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: '../../src/assets/women/w/2/zoomout.webp',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: '../../src/assets/women/w/2/behind.webp',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    colors: [
      { name: 'red', class: 'bg-green-600', selectedClass: 'ring-gray-400' },
      { name: 'orang', class: 'bg-orange-500', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-300', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  }
  export {product}