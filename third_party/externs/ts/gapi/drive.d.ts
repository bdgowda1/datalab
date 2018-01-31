import { HttpResponse } from "../../../../sources/web/datalab/polymer/test/test-utils";
import '../../../../sources/web/datalab/polymer/node_modules/@types/gapi/index';
/// <reference path="../../../../sources/web/datalab/polymer/node_modules/@types/gapi/index.d.ts" />

/*
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

declare namespace gapi.client.drive {
  const about: {
    get: () => any;
  }

  // https://developers.google.com/drive/v3/reference/files/<api>

  interface CreateFileRequest {
    mimeType: string;
    name: string;
    parents: string[];
  }

  interface CopyFileRequest {
    fileId: string;
  }

  interface DeleteFileRequest {
    fileId: string;
  }

  interface ListFilesRequest {
    fields?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    q?: string; // Search/filter query
  }

  interface GetFileRequest {
    fields?: string;
    fileId: string;
  }

  interface UpdateFileRequest {
    addParents?: string;
    fileId?: string;
    removeParents?: string;
    resource?: any;
  }

  // https://developers.google.com/drive/v3/reference/files#resource
  interface File {
    createdTime: string;
    description: string;
    downloadUrl?: string;
    fileExtension?: string;
    iconLink: string;
    id: string;
    kind: string; // 'drive#file'
    mimeType: string;
    modifiedTime: string;
    name: string;
    owners: [{
      kind: string;
      displayName: string;
      photoLink: string;
      me: boolean;
      permissionId: string;
      emailAddress: string;
    }];
    parents: string[];
    starred: boolean;
    trashed: boolean;
  }

  interface ListFilesResponse {
    files: File[];
    incompleteSearch: boolean;
    kind: string;   // Should always be "drive#fileList"
    nextPageToken: string;
  }

  const files: {
    create: (request: CreateFileRequest) => Promise<HttpResponse<File>>;
    copy: (request: CopyFileRequest) => Promise<HttpResponse<File>>;
    delete: (request: DeleteFileRequest) => Promise<HttpResponse<void>>;
    get: (request: GetFileRequest) => Promise<HttpResponse<File>>;
    list: (request?: ListFilesRequest) => Promise<HttpResponse<ListFilesResponse>>;
    update: (request?: UpdateFileRequest) => Promise<HttpResponse<File>>;
  }
}

export = gapi;
