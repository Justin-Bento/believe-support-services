export interface Program {
  _id: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
}
