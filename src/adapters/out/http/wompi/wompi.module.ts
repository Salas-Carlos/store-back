import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { WompiApiService } from "./repositories/wompi.service";
import { WompiClient } from "./config/client";



@Module({
    imports: [HttpModule],
    providers: [
        {
            provide: 'WOMPI_API_URL',
            useFactory: (configService: ConfigService) => configService.get('WOMPI_API_URL'),
            inject: [ConfigService]
        },
        WompiApiService,
        WompiClient
    ],
    exports: [WompiApiService]
})
export class WompiServiceModule { }