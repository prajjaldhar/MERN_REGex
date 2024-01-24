const data = {
  ecommerce_companies: [
    {
      name: "Company A",
      start_date: "2020-01-15",
      no_of_employees: 500,
      ceo_name: "John Smith",
      products: [
        {
          category: "Electronics",
          items: [
            {
              isbn: "978-1234567890",
              date: {
                manufacture_date: "2023-03-10",
                expiry_date: "2025-03-10",
                release_date: "2023-04-01",
              },
              production: {
                information: {
                  product_type: "Smartphone",
                  manufacturer: {
                    manufactured_by: "Manufactured by pratham",
                    supply_by: "Supplied by pratham",
                  },
                },
                price: 599.99,
                description: "High-end smartphone with advanced features.",
                size: "5.5 inches",
                popularity: 4.5,
                color: ["Red", "Blue", "Green"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "Company B",
      start_date: "2018-05-20",
      no_of_employees: 750,
      ceo_name: "Emily Johnson",
      products: [
        {
          category: "Clothing",
          items: [
            {
              isbn: "978-9876543210",
              date: {
                manufacture_date: "2023-02-15",
                expiry_date: "2024-12-31",
                release_date: "2023-03-15",
              },
              production: {
                information: {
                  product_type: "Cotton shirt",
                  manufacturer: {
                    manufactured_by: "Manufactured by dwitya",
                    supply_by: "Supplied by dwitya",
                  },
                },
                price: 29.99,
                description: "Comfortable cotton T-shirt in various colors.",
                size: "Medium",
                popularity: 4.0,
                color: ["Yellow", "Green"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "Company C",
      start_date: "2019-11-08",
      no_of_employees: 600,
      ceo_name: "David Wilson",
      products: [
        {
          category: "Books",
          items: [
            {
              isbn: "978-5432109876",
              date: {
                manufacture_date: "2022-07-20",
                expiry_date: null,
                release_date: "2022-08-15",
              },
              production: {
                information: {
                  product_type: "KopyKitab",
                  manufacturer: {
                    manufactured_by: "Manufactured by tritya",
                    supply_by: "Supplied by tritya",
                  },
                },
                price: 14.99,
                description: "Bestselling fiction novel by a renowned author.",
                size: "Paperback",
                popularity: 4.8,
                color: ["pink", "orange"],
              },
            },
          ],
        },
      ],
    },
  ],
};
export default data;
