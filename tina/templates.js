export function blog_postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
    },
    {
      type: "string",
      name: "author",
      label: "Author",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "string",
      name: "keywords",
      label: "Keywords",
      list: true,
    },
    {
      type: "image",
      name: "featured_image",
      label: "Featured Image",
    },
    {
      type: "image",
      name: "images",
      label: "Images",
      list: true,
    },
    {
      type: "string",
      name: "photo_cred",
      label: "Photo Cred",
    },
    {
      type: "string",
      name: "facebook_discussion",
      label: "Facebook Discussion Link",
    },
  ];
}
export function cardFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "category",
      label: "category",
    },
    {
      type: "string",
      name: "group",
      label: "group",
    },
    {
      type: "string",
      name: "props",
      label: "props",
      list: true,
    },
  ];
}
export function pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "number",
      name: "priority",
      label: "priority",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
  ];
}
