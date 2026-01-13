export type UpdateThresholdsRequest = {
    heartbeatLimit: number;
    heartbeatDeviation: number;

    soundLimit: number;
    soundDeviation: number;

    bloodLimit: number;
    bloodDeviation: number;

    lightLimit: number;
    lightDeviation: number;
}