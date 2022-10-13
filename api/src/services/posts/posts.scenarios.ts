import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        slug: 'String9466242',
        body: 'String',
        updatedAt: '2022-10-13T22:03:48.976Z',
      },
    },
    two: {
      data: {
        title: 'String',
        slug: 'String266700',
        body: 'String',
        updatedAt: '2022-10-13T22:03:48.976Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
