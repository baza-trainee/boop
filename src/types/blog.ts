export type BlogPostData = {
  photo: string;
  titleUA: string;
  titleEN: string;
  titleIT: string;
  textUA: string;
  textEN: string;
  textIT: string;
};

export type BlogUpdateData = {
  id: number;
  photo?: string;
  titleUA?: string;
  titleEN?: string;
  titleIT?: string;
  textUA?: string;
  textEN?: string;
  textIT?: string;
};
