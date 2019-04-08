export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  facebook: string;
  twitter: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
}

const config: WebsiteConfig = {
  title: `Jess & Joe`,
  description: `Your online home for everything related to Jess and Joe's wedding in Summit County, Colorado` ,
  coverImage: 'img/us/trees-keystone.jpg',
  logo: 'img/favicon/favicon-big.png',
  siteUrl: 'https://www.jessandjoe.co',
  facebook: '',
  twitter: '',
  showSubscribe: true,
  // mailchimpAction: 'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
  // mailchimpName: 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
};

export default config;
