export enum MemoryMapTitle {
  eigth = '8GB',
  sixten = '16GB',
  twentyFour = '24GB',
  thirtyTwo = '32GB',
  sixtyFour = '64GB',
  oneTwentyEight = '128GB',
  twoFiftySix = '256GB',
  fiveTwelve = '512GB',
  one = '1TB',
  two = '2TB',
}
export enum MemoryMap {
  eigth = 8,
  sixten = 16,
  twentyFour = 24,
  thirtyTwo = 32,
  sixtyFour = 64,
  oneTwentyEight = 128,
  twoFiftySix = 256,
  fiveTwelve = 512,
  one = 1,
  two = 2,
}

export const ParsMemorysToString: any = {
  [MemoryMap.eigth]: '8 GB',
  [MemoryMap.sixten]: '16 GB',
  [MemoryMap.twentyFour]: '24 GB',
  [MemoryMap.thirtyTwo]: '32 GB',
  [MemoryMap.sixtyFour]: '64 GB',
  [MemoryMap.oneTwentyEight]: '128 GB',
  [MemoryMap.twoFiftySix]: '256 GB',
  [MemoryMap.fiveTwelve]: '512 GB',
  [MemoryMap.one]: '1 TB',
  [MemoryMap.two]: '2 TB',
};
