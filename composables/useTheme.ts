import { onMounted } from "vue";

export default function useTheme() {
  const enabled = useState<boolean>("theme", () => false);

  const setTheme = (isDark: boolean) => {
    enabled.value = isDark;
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleTheme = () => {
    setTheme(!enabled.value);
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark" || 
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setTheme(isDark);
  });

  return {
    enabled,
    toggleTheme,
  };
}