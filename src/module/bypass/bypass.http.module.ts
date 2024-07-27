import { Module } from '@nestjs/common';
import { BypassController } from './bypass.controller';

@Module({
  imports: [],
  controllers: [BypassController],
  providers: [],
})
export class BypasstHttpModule {}
