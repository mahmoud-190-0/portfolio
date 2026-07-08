import { useEffect, useState } from 'react';

export function useTypingEffect(words, speed = 85, pause = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const delay = isDeleting ? speed / 2 : speed;

    const timer = window.setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        window.setTimeout(() => setIsDeleting(true), pause);
        return;
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((index) => index + 1);
        return;
      }

      setText((value) =>
        isDeleting
          ? currentWord.substring(0, value.length - 1)
          : currentWord.substring(0, value.length + 1)
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, pause, speed, text, wordIndex, words]);

  return text;
}
