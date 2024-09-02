import { Injectable } from "@nestjs/common";
import { STATUS_MESSAGE } from "./status.constants";

@Injectable()
export class StatusService {
  constructor() {}

  status() {
    return STATUS_MESSAGE;
  }
}
