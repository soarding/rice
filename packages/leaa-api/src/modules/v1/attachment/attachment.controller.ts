import { Controller, Get, HttpCode, Body, UseInterceptors, Post, UploadedFile, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { JwtGuard, PermissionsGuard } from '@leaa/api/src/guards';
import { AttachmentService } from '@leaa/api/src/modules/v1/attachment/attachment.service';
import { SaveInOssAliyunService } from '@leaa/api/src/modules/v1/attachment/save-in-oss-aliyun.service';
import { ICraeteAttachmentByOssCallback, IAttachmentParams } from '@leaa/api/src/interfaces';
import { Crud, CrudController, Override, ParsedRequest, CrudRequest } from '@nestjsx/crud';
import { Attachment } from '@leaa/api/src/entrys';
import { Permissions } from '@leaa/api/src/decorators';
import {
  AttachmentCreateOneReq,
  AttachmentUpdateOneReq,
  AttachmentUpdateManyReq,
  AttachmentUpdateManySortReq,
} from '@leaa/api/src/dtos/attachment';

@Crud({
  model: { type: Attachment },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {
    maxLimit: 1000,
    alwaysPaginate: true,
    // sort: [{ field: 'created_at', order: 'DESC' }],
  },
  routes: {
    // upload file, will be auto create
    exclude: ['createOneBase', 'createManyBase'],
    // getManyBase: { decorators: [UseGuards(JwtGuard, PermissionsGuard), Permissions('attachment.list-read')] },
    // getOneBase: { decorators: [UseGuards(JwtGuard, PermissionsGuard), Permissions('attachment.item-read')] },
    // createOneBase: { decorators: [UseGuards(JwtGuard, PermissionsGuard), Permissions('attachment.item-create')] },
    updateOneBase: { decorators: [UseGuards(JwtGuard, PermissionsGuard), Permissions('attachment.item-update')] },
    deleteOneBase: { returnDeleted: true },
  },
  dto: {
    create: AttachmentCreateOneReq,
    update: AttachmentUpdateOneReq,
    replace: Attachment,
  },
})
@Controller('/v1/attachments')
export class AttachmentController implements CrudController<Attachment> {
  constructor(
    public readonly service: AttachmentService,
    private readonly saveInOssAliyunService: SaveInOssAliyunService,
  ) {}

  @Override('deleteOneBase')
  @UseGuards(JwtGuard, PermissionsGuard)
  @Permissions('attachment.item-delete')
  deleteOne(@ParsedRequest() req: CrudRequest): Promise<Attachment | void> {
    return this.service.deleteOne(req);
  }

  //
  //

  /**
   * @ideaNotes
   * ??? upload ???????????????????????? data ??? client???????????????????????????????????????
   * ?????????????????? ATTACHMENT_SAVE_IN_LOCAL?????????????????????????????? uploadFile ?????????
   * ?????????????????? ATTACHMENT_SAVE_IN_OSS?????? client ??????????????? aliyun????????? aliyun ??? POST ???????????? ossCallback ??????????????????
   */
  @Get('signature')
  async getSignature() {
    return this.service.getSignature();
  }

  @HttpCode(200)
  @Post('upload')
  @UseGuards(JwtGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@Body() body: IAttachmentParams, @UploadedFile() file: Express.Multer.File) {
    return this.service.uploadFile(body, file);
  }

  @HttpCode(200)
  @Post('oss/callback')
  async ossCallback(@Body() req: ICraeteAttachmentByOssCallback) {
    return this.saveInOssAliyunService.ossCallback(req);
  }

  //
  //

  @Post('batch')
  @UseGuards(JwtGuard, PermissionsGuard)
  @Permissions('attachment.item-update')
  batchUpdate(@Body() dto: AttachmentUpdateManyReq): Promise<string> {
    return this.service.batchUpdate(dto);
  }

  @Post('batch-sort')
  @UseGuards(JwtGuard, PermissionsGuard)
  @Permissions('attachment.item-update')
  batchUpdateSort(@Body() dto: AttachmentUpdateManySortReq): Promise<string> {
    return this.service.batchUpdateSort(dto);
  }
}
