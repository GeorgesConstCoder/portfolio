import { members } from "../data/members"

export function getMemberBySlug(slug: string) {
    return members.find((member) => member.slug === slug)
}