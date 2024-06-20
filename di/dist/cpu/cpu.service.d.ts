import { PowerService } from '../power/power.service';
export declare class CpuService {
    private PowerService;
    constructor(PowerService: PowerService);
    compute(a: number, b: number): number;
}
