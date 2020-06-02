// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import data from './alleBedingungen.csv'

type RawGender = 'weiblich' | 'männlich' | 'divers' | undefined
type UV = 'm' | 'f' | 'n'

export const UV = [
    {id: 0, name: 'alle'},
    {id: 1, name: 'f'},
    {id: 2, name: 'm'},
    {id: 3, name: 'n'},
] as const

export const GENDER = [
    {id: 0, name: 'alle'},
    {id: 1, name: 'weiblich'},
    {id: 2, name: 'männlich'},
    {id: 3, name: 'divers'},
] as const

type RawDataEntry = {
    submission: number
    item: number
    plural: number
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

export type DataEntry = Omit<RawDataEntry, 'gender' | 'uv1' | 'uv2'> & {
    gender: typeof GENDER[number]['id']
    uv1: typeof UV[number]['id']
    uv2: typeof UV[number]['id']
}

export const DATA: DataEntry[] = (data as RawDataEntry[]).map((entry) => ({
    ...entry,
    gender: (GENDER.find(({name}) => name === entry.gender) || GENDER[2]).id,
    uv1: (UV.find(({name}) => name === entry.uv1) as typeof UV[number]).id,
    uv2: (UV.find(({name}) => name === entry.uv2) as typeof UV[number]).id,
}))
