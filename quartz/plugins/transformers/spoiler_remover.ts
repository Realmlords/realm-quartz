import { QuartzTransformerPlugin } from "../types"

export interface Options {
}

const defaultOptions: Options = { 
}

/**
 * removes everything after #spoiler
 * */
export const SpoilerRemover: QuartzTransformerPlugin<Partial<Options> | undefined> = (
  userOpts,
) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "SpoilerRemover",
    textTransform(_ctx, src) {
        if (src instanceof Buffer) {
          src = src.toString()
        }
        src = src.split("#spoiler")[0];
      
      return src
    },
  }
}
