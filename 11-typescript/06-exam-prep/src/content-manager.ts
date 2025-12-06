import { DetailedContent, findItemById } from "./content-types";
import { NotifyOnSuccess } from "./decorators";
import { Viewer } from "./models";

export class ContentManager {
  private readonly contentItems: DetailedContent[] = [];
  private readonly watchedContent: Map<number, Viewer[]> = new Map();

  addContent(item: DetailedContent) {
    this.contentItems.push(item);
    this.watchedContent.set(item.id, []);

    return `Content "${item.title}" (ID: ${item.id}) has been added.`;
  }

  @NotifyOnSuccess("Email")
  markAsWatched(contentId: number, viewer: Viewer) {
    const viewerList = this.watchedContent.get(contentId);
    if (viewerList) {
      viewerList.push(viewer);
      return `Viewer ${viewer.name} marked content ID ${contentId} as watched.`;
    }

    return `ERROR: Content with ID ${contentId} not found.`;
  }

  listAllContent() {
    return this.contentItems.map((i) => i.getDetails());
  }

  findContent(contentId: number) {
    return findItemById(this.contentItems, contentId);
  }
}
