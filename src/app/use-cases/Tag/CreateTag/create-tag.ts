import { Injectable } from '@nestjs/common';
import { Tag } from '@app/entities/tag';
import { ITagsRepository } from '@app/repositories/ITagRepository';

interface CreateNotificationRequest {
  description: string;
}

interface CreateNotificationResponse {
  tag: Tag;
}

@Injectable()
export class CreateTag {
  constructor(private tagsRepository: ITagsRepository) {}

  async execute(
    request: CreateNotificationRequest,
  ): Promise<CreateNotificationResponse> {
    const { description } = request;

    const tag = new Tag({
      description,
    });

    await this.tagsRepository.create(tag);

    return { tag };
  }
}
