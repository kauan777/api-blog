import { randomUUID } from 'crypto';

export interface TagProps {
  description: string;
}

export class Tag {
  private _id: string;
  private props: TagProps;

  constructor(props: TagProps, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }

  public get id(): string {
    return this._id;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public get description(): string {
    return this.props.description;
  }
}
