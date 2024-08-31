import { Injectable } from "@nestjs/common";
import { CreateStatusInput } from "./dto/create-status.input";

@Injectable()
export class StatusService {
  create(createStatusInput: CreateStatusInput) {
    return "This action adds a new status";
  }

  findAll() {
    return `This action returns all status`;
  }

  findOne(id: number) {
    return `This action returns a #${id} status`;
  }
}
