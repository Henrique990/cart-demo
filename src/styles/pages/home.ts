import { styled } from "..";

export const HomeContainer = styled('main', {
  width: '14rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
  gap: '1rem',
  padding: 5,


//   maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
})

export const Product = styled('a', {
  width: '14rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',


  img: {
    width: 100,
    height: 100,

  },

  h1: {
    padding: '1rem',
    borderRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },


  p: {
    padding: '0.5rem',
    margin: '0.5rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    input: {
      width: '2rem',
    },

  },

  button: {
    padding: '0.5rem',
    margin: '0.5rem auto',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },

  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
})