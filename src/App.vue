<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import AiImpactSection from './components/AiImpactSection.vue';
import CommerceDeepDiveSection from './components/CommerceDeepDiveSection.vue';
import EvidenceSection from './components/EvidenceSection.vue';
import HeroSection from './components/HeroSection.vue';
import NavBar from './components/NavBar.vue';
import PageAssist from './components/PageAssist.vue';
import ProofLabSection from './components/ProofLabSection.vue';
import ProfileSection from './components/ProfileSection.vue';
import ProjectSection from './components/ProjectSection.vue';
import SkillsSection from './components/SkillsSection.vue';
</script>

<template>
  <div class="min-h-screen overflow-x-hidden bg-white text-slate-900">
    <a href="#main-content" class="skip-link">跳到主要内容</a>
    <NavBar />
    <main id="main-content" tabindex="-1">
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <CommerceDeepDiveSection />
      <EvidenceSection />
      <ProofLabSection />
      <AiImpactSection />
      <ProfileSection />
    </main>
    <PageAssist />
    <AppFooter />
  </div>
</template>
