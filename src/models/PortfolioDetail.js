export default class PortfolioDetail {
  constructor(
    id,
    imageUrls,
    coverImage,
    title,
    shortDesc,
    desc,
    client,
    started,
    ended,
    status,
    github,
    technologies,
    demo,
    category,
    tags
  ) {
    this.id = id;
    this.imageUrls = imageUrls;
    this.coverImage = coverImage;
    this.title = title;
    this.shortDesc = shortDesc;
    this.desc = desc;
    this.client = client;
    this.started = started;
    this.ended = ended;
    this.status = status;
    this.github = github;
    this.technologies = technologies;
    this.demo = demo;
    this.category = category;
    this.tags = tags;
  }
}
