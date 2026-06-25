<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import AiSiteCaseSection from './components/AiSiteCaseSection.vue';
import AutomationSection from './components/AutomationSection.vue';
import EvidenceSection from './components/EvidenceSection.vue';
import HeroSection from './components/HeroSection.vue';
import NavBar from './components/NavBar.vue';
import PracticeSection from './components/PracticeSection.vue';
import ProfileSection from './components/ProfileSection.vue';
import ProjectSection from './components/ProjectSection.vue';
import ScreenshotCasesSection from './components/ScreenshotCasesSection.vue';
import SkillsSection from './components/SkillsSection.vue';
</script>

<template>
  <div class="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
    <NavBar />
    <main>
      <HeroSection />
      <AiSiteCaseSection />
      <SkillsSection />
      <ProjectSection />
      <EvidenceSection />
      <ScreenshotCasesSection />
      <AutomationSection />
      <PracticeSection />
      <ProfileSection />
    </main>
    <AppFooter />
  </div>
</template>
