import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import satori from 'satori'
import sharp from 'sharp'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const barlowRegular = readFileSync(resolve('./src/assets/fonts/Barlow-Regular.ttf'))
const barlowExtraLightItalic = readFileSync(resolve('./src/assets/fonts/Barlow-ExtraLightItalic.ttf'))
const lobster = readFileSync(resolve('./public/lobster.png'))
const lobsterBase64 = `data:image/png;base64,${lobster.toString('base64')}`

export async function getStaticPaths() {
  const posts = await getCollection('blog')
  return posts.map(post => ({
    params: { slug: post.id },
    props: {
      title: post.data.title,
      description: post.data.description ?? '',
    },
  }))
}

export const GET: APIRoute = async ({ props }) => {
  const { title, description } = props

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          background: '#111111',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                flex: 1,
                justifyContent: 'center',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '96px',
                      fontFamily: 'Barlow',
                      fontWeight: 400,
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      lineHeight: 1,
                    },
                    children: title,
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '48px',
                      fontFamily: 'Barlow',
                      fontWeight: 200,
                      fontStyle: 'italic',
                      color: '#cccccc',
                      lineHeight: 1.3,
                    },
                    children: description,
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                width: '100%',
                height: '2px',
                background: '#d1d1d1',
                margin: '24px 0',
              },
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                width: '100%',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '28px',
                      fontFamily: 'Barlow',
                      fontWeight: 400,
                      color: '#888888',
                    },
                    children: 'toddl.dev',
                  },
                },
                {
                  type: 'img',
                  props: {
                    src: lobsterBase64,
                    width: 120,
                    height: 120,
                    style: { objectFit: 'contain' },
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Barlow',
          data: barlowRegular,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Barlow',
          data: barlowExtraLightItalic,
          weight: 200,
          style: 'italic',
        },
      ],
    }
  )

  const png = await sharp(Buffer.from(svg)).png().toBuffer()

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}