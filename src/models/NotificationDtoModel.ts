import type { NotificationDto } from "@/types/NotificationDto";
import { NotificationType } from "@/types/NotificationDto";
export class NotificationDtoModel implements Required<NotificationDto> {
  user: string;
  avatar: string;
  type: NotificationType;
  description: string;
  reference: string | null;
  time: string;
  unread: boolean;

  constructor(data?: NotificationDto) {
    this.user = data?.user || "";
    this.avatar = data?.avatar || "";
    this.type = data?.type ? data.type : NotificationType.Follow;
    this.description = data?.description || "";
    this.reference = data?.reference || null;
    this.time = data?.time || "";
    this.unread = data?.unread || false;
  }
}
