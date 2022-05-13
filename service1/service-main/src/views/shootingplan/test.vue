<template>
  <div class="tab-container">
    <el-card>
      <el-row>
        <el-col span="2">
          <el-button @click="$refs.vuecal.switchView('day', new Date())"
            >Today</el-button
          >
        </el-col>
        <el-col span="6">
          <el-button @click="activeView = 'day'">Day</el-button>
          <el-button @click="activeView = 'week'">Week</el-button>
          <el-button @click="activeView = 'month'">Month</el-button>
        </el-col>
      </el-row>
    </el-card>

    <vue-cal
      ref="vuecal"
      class="vuecal--blue-theme"
      selected-date="2018-11-21"
      :disable-views="['years', 'year']"
      events-on-month-view="short"
      :events="events2"
      style="height: 800px"
      :active-view.sync="activeView"
      :time-from="8 * 60"
      :time-to="23 * 60"
      :time-step="30"
      hide-view-selector
    />
  </div>
</template>
