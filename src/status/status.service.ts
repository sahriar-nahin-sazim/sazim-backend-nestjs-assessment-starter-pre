import { Injectable } from "@nestjs/common";
import { CreateStatusDto } from "./dto/create-status.dtos";
import { STATUS_MESSAGE } from "./status.constants";
import { PrismaService } from "@/prisma/prisma.service";

@Injectable()
export class StatusService {
  constructor(private readonly prismaService: PrismaService) {}

  status() {
    return STATUS_MESSAGE;
  }

  create(createStatusInput: CreateStatusDto) {
    return this.prismaService.status.create({
      data: {
        message: createStatusInput.message,
      },
    });
  }
}
