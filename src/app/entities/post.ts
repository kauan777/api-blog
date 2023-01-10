import { randomUUID } from 'crypto';
import { Replace } from '../helpers/Replace';
import { Content } from './content';
import { Tag } from './tag';

export interface PostProps {
  title: string;
  subtitle: string;
  content: Content;
  createdAt: Date;
  imageUrl: string;
  tag: Tag[];
}

export class Post {
  private _id: string;
  private props: PostProps;

  constructor(props: Replace<PostProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }
  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this.props.title;
  }
  public set title(title: string) {
    this.props.title = title;
  }

  public get subtitle(): string {
    return this.props.subtitle;
  }
  public set subtitle(subtitle: string) {
    this.props.subtitle = subtitle;
  }

  public get content(): Content {
    return this.props.content;
  }
  public set content(content: Content) {
    this.props.content = content;
  }

  public get imageUrl(): string {
    return this.props.imageUrl;
  }
  public set imageUrl(imageUrl: string) {
    this.props.imageUrl = imageUrl;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
