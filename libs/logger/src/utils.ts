import { ExecutionContext } from '@nestjs/common';

export function getHandlerInfo(context: ExecutionContext) {
  return `${context.getClass().name}/${context.getHandler().name}`;
}
