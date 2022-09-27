import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

    get() {
        const ok = {
            success: true,
        };
        return ok;
    }

    post() {
        const ok = {
            success: true,
        };
        return ok;
    }
}
