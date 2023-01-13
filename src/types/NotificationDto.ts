export enum NotificationType {
  PostReaction = "post-reaction",
  Follow = "follow",
  GroupJoin = "group-join",
  GroupLeft = "group-left",
  MessageSent = "message-sent",
  PictureComment = "picture-comment",
}

export interface NotificationDto {
  id: string;
  user: string;
  avatar: string;
  type: NotificationType;
  description: string;
  reference: string | null;
  time: string;
  unread: boolean;
}
