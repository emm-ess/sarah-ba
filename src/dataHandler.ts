// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import data from './alleBedingungen.csv'

type RawGender = 'weiblich' | 'männlich' | 'divers' | undefined
type UV = 'm' | 'f' | 'n'

type RawDataEntry = {
    submission: number
    item: number
    lural: number
    vor: number
    krit: number
    spill1: number
    spill2: number
    spill3: number
    sentence: number
    gender: RawGender
    uv1: UV
    uv2: UV
}

export type DataEntry = RawDataEntry & {
    gender: number
    uv1: number
    uv2: number
}

export const UV = [
    {id: 0, name: 'f'},
    {id: 1, name: 'm'},
    {id: 2, name: 'n'},
] as const

export const GENDER = [
    {id: 0, name: 'weiblich'},
    {id: 1, name: 'männlich'},
    {id: 2, name: 'divers'},
] as const

const DATA = (data as RawDataEntry[]).map((entry) => {
    const gender = GENDER.find(({name}) => name === entry.gender) || GENDER[2]
    return {
        ...entry,
        gender,
        uv1: UV.find(({name}) => name === entry.uv1),
        uv2: UV.find(({name}) => name === entry.uv2),
    }
})
