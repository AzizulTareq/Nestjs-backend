import { PowerService } from 'src/power/power.service';
export declare class DiskService {
    private PowerService;
    constructor(PowerService: PowerService);
    getData(): string;
}
