export const useCard = () => {
  return [
    {
      id: 1,
      title: "Simple Card",
      description:
        "This is a simple card with a clean layout, basic padding, and a subtle shadow.",
      imageUrl: null,
      tailwindClasses: "rounded overflow-hidden shadow-lg bg-white p-6",
      elements: [
        { type: "title", tailwind: "font-bold text-xl mb-2 text-gray-800" },
        { type: "description", tailwind: "text-gray-700 text-base" },
      ],
    },
    {
      id: 2,
      title: "Image Top Card",
      description:
        "A card featuring an image prominently at the top. Good for visual content.",
      imageUrl:
        "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?Text=Card+Image",
      imageAlt: "Placeholder Image",
      tailwindClasses: "rounded overflow-hidden shadow-xl bg-white",
      elements: [
        { type: "image", tailwind: "w-full h-48 object-cover" },
        {
          type: "contentWrapper",
          tailwind: "px-6 py-4",
          children: [
            {
              type: "title",
              tailwind: "font-bold text-xl mb-2 text-purple-700",
            },
            { type: "description", tailwind: "text-gray-700 text-base" },
          ],
        },
        {
          type: "tagsWrapper",
          tailwind: "px-6 pt-4 pb-2",
          tags: [
            {
              label: "#photography",
              tailwind:
                "inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-700 mr-2 mb-2",
            },
            {
              label: "#travel",
              tailwind:
                "inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-700 mr-2 mb-2",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Dark Mode Card",
      description:
        "A card designed with a dark theme, suitable for interfaces that prefer a darker palette.",
      imageUrl: null,
      tailwindClasses: "rounded overflow-hidden shadow-lg bg-gray-800 p-6",
      elements: [
        { type: "title", tailwind: "font-bold text-xl mb-2 text-white" },
        { type: "description", tailwind: "text-gray-300 text-base" },
        {
          type: "button",
          label: "Learn More",
          tailwind:
            "mt-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded",
        },
      ],
    },
    {
      id: 4,
      title: "Call to Action!",
      description:
        "This card is designed to grab attention and encourage user interaction with a clear CTA.",
      imageUrl: null,
      tailwindClasses:
        "rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-center",
      elements: [
        { type: "title", tailwind: "font-bold text-2xl mb-3 text-white" },
        { type: "description", tailwind: "text-indigo-100 text-lg mb-6" },
        {
          type: "button",
          label: "Sign Up Now",
          tailwind:
            "bg-white hover:bg-gray-100 text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow-md",
        },
      ],
    },
    {
      id: 5,
      title: null,
      testimonialText:
        "This is an amazing product! It has changed my workflow completely. Highly recommended!",
      avatarUrl: "https://via.placeholder.com/100/34D399/FFFFFF?Text=User",
      avatarAlt: "User Avatar",
      userName: "Jane Doe",
      userTitle: "CEO, Company Inc.",
      tailwindClasses:
        "rounded-xl overflow-hidden shadow-lg bg-white p-6 border-l-4 border-teal-500",
      elements: [
        {
          type: "testimonial",
          tailwind: "text-gray-600 text-base italic mb-4",
        },
        {
          type: "attributionWrapper",
          tailwind: "flex items-center",
          children: [
            { type: "avatar", tailwind: "w-12 h-12 rounded-full mr-4" },
            {
              type: "userInfoWrapper",
              tailwind: "",
              children: [
                { type: "userName", tailwind: "text-gray-900 font-semibold" },
                { type: "userTitle", tailwind: "text-teal-600 text-sm" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Awesome Product",
      description:
        "High-quality product with amazing features and a sleek design.",
      imageUrl:
        "https://via.placeholder.com/400x300/FBBF24/FFFFFF?Text=Product",
      imageAlt: "Product Image",
      price: "$99.99",
      tailwindClasses:
        "max-w-sm rounded-lg overflow-hidden shadow-lg bg-white group",
      elements: [
        {
          type: "image",
          tailwind:
            "w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300",
        },
        {
          type: "contentWrapper",
          tailwind: "px-6 py-4",
          children: [
            {
              type: "title",
              tailwind: "font-bold text-xl mb-2 text-amber-700",
            },
            { type: "description", tailwind: "text-gray-700 text-base" },
          ],
        },
        {
          type: "footerWrapper",
          tailwind: "px-6 py-4 flex justify-between items-center",
          children: [
            { type: "price", tailwind: "text-2xl font-bold text-amber-600" },
            {
              type: "button",
              label: "Add to Cart",
              tailwind:
                "bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-full",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      title: "Feature Title",
      description: "A short description of a key feature, presented minimally.",
      iconSvgPath: "M5 13l4 4L19 7",
      tailwindClasses:
        "rounded-md shadow-md bg-gray-50 p-6 flex flex-col items-center text-center",
      elements: [
        {
          type: "iconWrapper",
          tailwind: "bg-green-500 p-3 rounded-full mb-4",
          children: [
            {
              type: "icon",
              tailwind: "h-8 w-8 text-white",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
          ],
        },
        { type: "title", tailwind: "font-semibold text-lg mb-1 text-gray-700" },
        { type: "description", tailwind: "text-gray-600 text-sm" },
      ],
    },
    {
      id: 8,
      title: "Important Alert",
      description:
        "This card uses a top border accent to draw attention to important information or alerts.",
      imageUrl: null,
      tailwindClasses:
        "rounded-lg overflow-hidden bg-white p-5 border-t-4 border-red-500 shadow-lg",
      elements: [
        { type: "title", tailwind: "font-bold text-xl mb-2 text-red-700" },
        { type: "description", tailwind: "text-gray-700 text-base" },
      ],
    },
    {
      id: 9,
      title: "Split Layout",
      description:
        "This card demonstrates a horizontal split, ideal for combining imagery with more detailed text.",
      imageUrl: "https://via.placeholder.com/300x400/EC4899/FFFFFF?Text=Info",
      imageAlt: "Informational Image",
      linkText: "Read article →",
      linkUrl: "#",
      tailwindClasses: "rounded-lg overflow-hidden shadow-xl bg-white md:flex",
      elements: [
        {
          type: "imageWrapper",
          tailwind: "md:w-1/3",
          children: [{ type: "image", tailwind: "w-full h-full object-cover" }],
        },
        {
          type: "contentWrapper",
          tailwind: "md:w-2/3 p-6 flex flex-col justify-center",
          children: [
            { type: "title", tailwind: "font-bold text-xl mb-2 text-pink-600" },
            { type: "description", tailwind: "text-gray-700 text-base mb-4" },
            {
              type: "link",
              tailwind: "text-pink-500 hover:text-pink-700 font-semibold",
            },
          ],
        },
      ],
    },
    {
      id: 10,
      title: "Interactive Card",
      description:
        "This card has hover effects for background, shadow, and position, making it feel more interactive.",
      imageUrl: null,
      tailwindClasses:
        "rounded-lg overflow-hidden shadow-lg bg-sky-600 p-6 text-white hover:bg-sky-700 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer",
      elements: [
        { type: "title", tailwind: "font-bold text-xl mb-2" },
        { type: "description", tailwind: "text-sky-100 text-base" },
      ],
    },
  ];
};
