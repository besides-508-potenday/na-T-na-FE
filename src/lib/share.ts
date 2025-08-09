export type ShareOutcome = 'shared' | 'copied';

interface ShareLinkParams {
  url: string;
  title?: string;
  text?: string;
}

export async function shareLink(
  params: ShareLinkParams
): Promise<ShareOutcome> {
  const { url, title, text } = params;

  // Try native share first
  if (typeof navigator !== 'undefined' && 'share' in navigator) {
    try {
      // @ts-expect-error: navigator.share is available in supporting browsers
      await navigator.share({ url, title, text });
      return 'shared';
    } catch {
      // fall through to clipboard copy
    }
  }

  // Fallback: copy to clipboard
  if (
    typeof navigator !== 'undefined' &&
    navigator.clipboard &&
    typeof navigator.clipboard.writeText === 'function'
  ) {
    await navigator.clipboard.writeText(url);
    return 'copied';
  }

  // Last resort: create a temporary element and copy (older browsers)
  if (typeof document !== 'undefined') {
    const textarea = document.createElement('textarea');
    textarea.value = url;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    return 'copied';
  }

  throw new Error('공유를 지원하지 않는 환경입니다.');
}
