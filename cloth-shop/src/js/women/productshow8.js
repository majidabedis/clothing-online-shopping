const product = {
    name: 'Derees',
    price: '$145',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Women', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
      {
        src: '../../../src/assets/women/w/8/behind.webp',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: '../../../src/assets/women/w/8/zoomin.webp',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: '../../../src/assets/women/w/8/zoomin.jpg',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: '../../../src/assets/women/w/8/zoomout.webp',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    colors: [
      { name: 'red', class: ' bg-amber-200', selectedClass: 'ring-red-400' },
      { name: 'orang', class: 'bg-pink-100', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-black', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: false },
      { name: '2XL', inStock: false },
      { name: '3XL', inStock: false },
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