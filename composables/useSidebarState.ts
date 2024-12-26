export function useSidebarState() {
  const isOpen = useState<boolean>('isOpen', () => false);

  function toggleSidebar() {
    isOpen.value = !isOpen.value;
  }

  return {
    isOpen,
    toggleSidebar,
  };
}