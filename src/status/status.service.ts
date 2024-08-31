import { Injectable } from "@nestjs/common";
import { CreateStatusDto } from "./dto/create-status.dtos";
import { PrismaService } from "src/prisma/prisma.service";
import { STATUS_MESSAGE } from "./status.constants";

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

  findAll() {
    return this.prismaService.status.findMany();
  }

  findOne(id: number) {
    return this.prismaService.status.findUnique({ where: { id } });
  }
}
