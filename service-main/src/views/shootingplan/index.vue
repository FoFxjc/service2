<template>
  <div class="cal-container">
    <el-row>
      <el-col :span="5">
        <el-card
          :body-style="{ padding: '5px 5px 10px 5px' }"
          style="margin: 5px; margin-top: 15px"
          shadow="hover"
          class="box-card"
        >
          <vue-cal
            class="vuecal--date-picker demo"
            xsmall="xsmall"
            :selected-date="selectedDate"
            hide-view-selector="hide-view-selector"
            :time="false"
            :transitions="false"
            active-view="month"
            :events="showingevents"
            :disable-views="['week', 'day']"
            @cell-click="selectedDate = $event"
            style="width: 100%; height: 380px"
          ></vue-cal>
        </el-card>
      </el-col>
      <el-col :span="19">
        <el-card
          :body-style="{ padding: '10px' }"
          style="margin: 5px"
          shadow="hover"
        >
          <el-select
            v-model="selected_satellite"
            placeholder="Type"
            class="filter-item"
            style="width: 130px"
            @change="handleSatelliteChange"
          >
            <el-option value="s01" label="Satellite 01">Satellite 01</el-option>
            <el-option value="s02" label="Satellite 02">Satellite 02</el-option>
            <el-option value="s03" label="Satellite 03">Satellite 03</el-option>
          </el-select>

          <el-input
            placeholder="Title or Description"
            style="width: 450px"
            class="filter-item"
            v-model="search_title"
            @keyup.enter.native="handleFilter"
          />

          <el-button
            class="filter-item"
            style="margin-left: 10px; float: right"
            type="primary"
            icon="el-icon-circle-plus-outline"
            @click="dialogCreationVisible = true"
          >
            Create Event
          </el-button>
        </el-card>
        <el-card
          :body-style="{ padding: '5px 5px 10px 5px' }"
          style="margin: 5px; margin-top: 15px"
          shadow="hover"
          class="box-card demo"
        >
          <vue-cal
            class="full-cal vuecal--full-height-delete"
            hide-weekends="hide-weekends"
            :selected-date="selectedDate"
            :time-from="5 * 60"
            :time-to="24 * 60"
            sticky-split-labels="sticky-split-labels"
            :events.sync="showingevents"
            events-on-month-view="short"
            @cell-focus="selectedDate = $event.date || $event"
            style="height: 900px"
          >
            <template v-slot:split-label="{ split, view }">
              <strong :style="`color: ${split.color}`">{{
                split.label
              }}</strong>
            </template>
            <template v-slot:event="{ event, view }">
              <div v-if="view == 'month'">
                <el-popover placement="right" trigger="hover">
                  <el-row type="flex" justify="space-between">
                    <el-button
                      type="primary"
                      icon="el-icon-edit"
                      size="mini"
                      circle
                      @click="(e) => onEventClick(event, e)"
                    ></el-button>
                    <el-button
                      type="danger"
                      icon="el-icon-delete"
                      size="mini"
                      circle
                      @click="(e) => onEventDelete(event, e)"
                    ></el-button>
                  </el-row>
                  <div slot="reference">
                    <div class="vuecal__event-title" v-html="event.title"></div>
                  </div>
                </el-popover>
              </div>
              <div v-if="view == 'week' || view == 'day'">
                <el-popover placement="right" trigger="hover">
                  <el-row type="flex" justify="space-between">
                    <el-button
                      type="primary"
                      icon="el-icon-edit"
                      circle
                      @click="(e) => onEventClick(event, e)"
                    ></el-button>
                    <el-button
                      type="danger"
                      icon="el-icon-delete"
                      circle
                      @click="(e) => onEventDelete(event, e)"
                    ></el-button>
                  </el-row>
                  <div slot="reference">
                    <div class="vuecal__event-title" v-html="event.title"></div>
                    <hr />
                    <em class="vuecal__event-time">
                      <strong>Event start: </strong>
                      <span>{{ event.start.formatTime() }}</span>
                      <br />
                      <strong>Event end: </strong>
                      <span> {{ event.end.formatTime() }}</span>
                    </em>
                  </div>
                </el-popover>
              </div>
            </template>
          </vue-cal>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog title="Edit Event" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Event Title" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Event Start Time" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.start_time"
            type="datetime"
            placeholder=""
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Event End Time" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.end_time"
            type="datetime"
            placeholder=""
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Event Description" :label-width="formLabelWidth">
          <el-input v-model="form.desc" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="Event Type" :label-width="formLabelWidth">
          <el-select v-model="form.type">
            <el-option label="Charging" value="charging"></el-option>
            <el-option label="Normal" value="normal"></el-option>
            <el-option label="Maintain" value="maintain"></el-option>
          </el-select>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleEventChange">Confirm</el-button>
      </div>
    </el-dialog>

    <el-dialog title="Create Event" :visible.sync="dialogCreationVisible">
      <el-form :model="form">
        <el-form-item label="Event Title" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Event Start Time" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.start_time"
            type="datetime"
            placeholder=""
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Event End Time" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.end_time"
            type="datetime"
            placeholder=""
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Event Description" :label-width="formLabelWidth">
          <el-input v-model="form.desc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Event Type" :label-width="formLabelWidth">
          <el-select v-model="form.type">
            <el-option label="Charging" value="charging"></el-option>
            <el-option label="Shooting Plan" value="normal"></el-option>
            <el-option label="Maintain" value="maintain"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogCreationVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleEventCreate">Create</el-button>
      </div>
    </el-dialog>

    <el-dialog
      title="Delete Event"
      :visible.sync="dialogDeleteVisible"
      width="350px"
    >
      <span>Are you sure you want to delete this event</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDeleteVisible = false">Cancel</el-button>
        <el-button type="danger" @click="handleEventDelete()">Delete</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import VueCal from "vue-cal";
import { uuid } from "vue-uuid";

import "vue-cal/dist/vuecal.css";

import moment from "moment";
import { start } from "nprogress";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {
  components: { VueCal },
  data: () => ({
    dialogFormVisible: false,
    dialogDeleteVisible: false,
    dialogCreationVisible: false,
    selected_satellite: "s01",
    search_title: "",
    selectedEvent: {},
    demoExample: {
      editable: {
        title: false,
        drag: true,
        resize: true,
        create: true,
        delete: true,
      },
      events: [],
    },
    selectedDate: new Date(),
    form: {
      title: "",
      desc: "",
      start_time: "",
      end_time: "",
      type: "",
      resource: "",
    },
    formLabelWidth: "160px",
    showingevents: [],
  }),
  computed: {
    // Get the Monday of the real time current week.
    previousFirstDayOfWeek() {
      return new Date(
        new Date().setDate(
          new Date().getDate() - ((new Date().getDay() + 6) % 7)
        )
      );
    },
  },
  methods: {
    onEventClick(event, e) {
      this.selectedEvent = event;
      this.form.title = event.title;
      this.form.start_time = moment(event.start);
      this.form.end_time = moment(event.end);
      this.dialogFormVisible = true;

      // Prevent navigating to narrower view (default vue-cal behavior).
      e.stopPropagation();
    },
    handleFilter() {
      if (this.search_title != "") {
        this.showingevents = this.demoExample.events.filter((u) => {
          return u.title.includes(this.search_title);
        });
      } else {
        this.showingevents = this.demoExample.events;
      }
    },
    onEventDelete(event, e) {
      this.selectedEvent = event;
      this.dialogDeleteVisible = true;

      e.stopPropagation();
    },
    handleSatelliteChange(value) {
      // Place all the events in the real time current week.
      this.demoExample.events = [];
      if (value == "s02") {
        for (let i = 0; i < 20; i++) {
          const day = this.previousFirstDayOfWeek.addDays(i).format();
          let start_hour = randomIntFromInterval(5, 7);
          let end_hour = start_hour + 2;
          this.demoExample.events.push({
            start: `${day} ${start_hour}:00`,
            end: `${day} ${end_hour}:00`,
            title: "Charging",
            class: "charging",
            background: true,
            deletable: false,
            resizable: false,
            id: uuid.v4(),
          });
        }
      } else if (value == "s03") {
        for (let i = 0; i < 20; i++) {
          const day = this.previousFirstDayOfWeek.addDays(i).format();
          let start_hour = randomIntFromInterval(20, 21);
          let end_hour = start_hour + 2;
          this.demoExample.events.push({
            start: `${day} ${start_hour}:00`,
            end: `${day} ${end_hour}:00`,
            title: "Maintain",
            class: "maintain",
            background: true,
            deletable: false,
            resizable: false,
            id: uuid.v4(),
          });
        }
        // Date.format() and Date.addDays() are helper methods added by Vue Cal.
        const monday = this.previousFirstDayOfWeek.format();
        const tuesday = this.previousFirstDayOfWeek.addDays(1).format();
        const thursday = this.previousFirstDayOfWeek.addDays(3).format();
        const friday = this.previousFirstDayOfWeek.addDays(4).format();
        this.demoExample.events.push(
          {
            id: 1,
            start: `${monday} 15:30`,
            end: `${monday} 17:30`,
            title: "Shooting Plan 1",
            content: '<i class="v-icon material-icons mt-1">sports_tennis</i>',
            resizable: false,
          },
          {
            id: 3,
            start: `${tuesday} 08:00`,
            end: `${tuesday} 10:00`,
            title: "Shooting Plan 3",
            content: '<i class="v-icon material-icons mt-1">User 2</i>',
            resizable: false,
          },
          {
            id: 4,
            start: `${thursday} 09:00`,
            end: `${thursday} 11:30`,
            title: "Shooting Plan 4",
            content: '<i class="v-icon material-icons mt-2">User 1</i>',
            resizable: false,
          },
          {
            id: 5,
            start: `${friday} 16:45`,
            end: `${friday} 18:45`,
            title: "Shooting Plan ",
            content: '<i class="v-icon material-icons mt-1">User 2</i>',
            resizable: false,
          }
        );
      } else {
        for (let i = 0; i < 20; i++) {
          const day = this.previousFirstDayOfWeek.addDays(i).format();
          this.demoExample.events.push({
            start: `${day} 21:00`,
            end: `${day} 23:00`,
            title: "Charging",
            class: "charging",
            background: true,
            deletable: false,
            resizable: false,
            id: uuid.v4(),
          });
        }
        // Date.format() and Date.addDays() are helper methods added by Vue Cal.
        const monday = this.previousFirstDayOfWeek.format();
        const tuesday = this.previousFirstDayOfWeek.addDays(1).format();
        const thursday = this.previousFirstDayOfWeek.addDays(3).format();
        const friday = this.previousFirstDayOfWeek.addDays(4).format();
        this.demoExample.events.push(
          {
            id: 1,
            start: `${monday} 15:30`,
            end: `${monday} 17:30`,
            title: "Shooting Plan 1",
            content: '<i class="v-icon material-icons mt-1">sports_tennis</i>',
            resizable: false,
          },
          {
            id: 3,
            start: `${tuesday} 08:00`,
            end: `${tuesday} 10:00`,
            title: "Shooting Plan 3",
            content: '<i class="v-icon material-icons mt-1">User 2</i>',
            resizable: false,
          },
          {
            id: 4,
            start: `${thursday} 09:00`,
            end: `${thursday} 11:30`,
            title: "Shooting Plan 4",
            content: '<i class="v-icon material-icons mt-2">User 1</i>',
            resizable: false,
          },
          {
            id: 5,
            start: `${friday} 16:45`,
            end: `${friday} 18:45`,
            title: "Shooting Plan ",
            content: '<i class="v-icon material-icons mt-1">User 2</i>',
            resizable: false,
          }
        );
      }

      this.showingevents = this.demoExample.events;
    },
    handleEventCreate() {
      console.log(this.form);
      if (this.form.type == "charging") {
        this.demoExample.events.push({
          id: uuid.v4(),
          start: this.form.start_time.format("YYYY MM DD, HH:mm"),
          end: this.form.end_time.format("YYYY MM DD, HH:mm"),
          title: this.form.title,
          class: "charging",
          background: true,
          deletable: false,
          resizable: false,
        });
      } else if (this.form.type == "maintain") {
        this.demoExample.events.push({
          id: uuid.v4(),
          start: this.form.start_time.format("YYYY MM DD, HH:mm"),
          end: this.form.end_time.format("YYYY MM DD, HH:mm"),
          title: this.form.title,
          class: "maintain",
          background: true,
          deletable: false,
          resizable: false,
        });
      } else {
        this.demoExample.events.push({
          id: uuid.v4(),
          start: this.form.start_time.format("YYYY MM DD, HH:mm"),
          end: this.form.end_time.format("YYYY MM DD, HH:mm"),
          title: this.form.title,
          background: true,
          deletable: false,
          resizable: false,
        });
      }

      this.showingevents = this.demoExample.events;
      console.log(this.showingevents);
      this.dialogCreationVisible = false;
      this.form = {
        title: "",
        desc: "",
        start_time: "",
        end_time: "",
        type: "",
        resource: "",
      };
    },
    handleEventDelete() {
      this.demoExample.events = this.demoExample.events.filter((u) => {
        return u.id !== this.selectedEvent.id;
      });
      this.showingevents = this.demoExample.events;
      this.dialogDeleteVisible = false;
      this.form = {
        title: "",
        desc: "",
        start_time: "",
        end_time: "",
        type: "",
        resource: "",
      };
    },
    handleEventChange() {
      let editedUser = {
        ...this.selectedEvent,
        ...this.form,
        start: this.form.start_time.format("YYYY MM DD, hh:mm"),
        end: this.form.end_time.format("YYYY MM DD, hh:mm"),
      };

      this.demoExample.events = this.demoExample.events.map((u) =>
        u.id !== editedUser.id ? u : editedUser
      );

      this.showingevents = this.demoExample.events;
      this.dialogFormVisible = false;
      this.form = {
        title: "",
        desc: "",
        start_time: "",
        end_time: "",
        type: "",
        resource: "",
      };
    },
  },
  created() {
    // Place all the events in the real time current week.
    for (let i = 0; i < 20; i++) {
      const day = this.previousFirstDayOfWeek.addDays(i).format();
      this.demoExample.events.push({
        start: `${day} 21:00`,
        end: `${day} 23:00`,
        title: "Charging",
        class: "charging",
        background: true,
        deletable: false,
        resizable: false,
        id: uuid.v4(),
      });
    }
    // Date.format() and Date.addDays() are helper methods added by Vue Cal.
    const monday = this.previousFirstDayOfWeek.format();
    const tuesday = this.previousFirstDayOfWeek.addDays(1).format();
    const thursday = this.previousFirstDayOfWeek.addDays(3).format();
    const friday = this.previousFirstDayOfWeek.addDays(4).format();
    this.demoExample.events.push(
      {
        id: 1,
        start: `${monday} 15:30`,
        end: `${monday} 17:30`,
        title: "Shooting Plan 1",
        content: '<i class="v-icon material-icons mt-1">sports_tennis</i>',
        resizable: false,
      },
      {
        id: 3,
        start: `${tuesday} 08:00`,
        end: `${tuesday} 10:00`,
        title: "Shooting Plan 3",
        content: '<i class="v-icon material-icons mt-1">User 2</i>',
        resizable: false,
      },
      {
        id: 4,
        start: `${thursday} 09:00`,
        end: `${thursday} 11:30`,
        title: "Shooting Plan 4",
        content: '<i class="v-icon material-icons mt-2">User 1</i>',
        resizable: false,
      },
      {
        id: 5,
        start: `${friday} 16:45`,
        end: `${friday} 18:45`,
        title: "Shooting Plan ",
        content: '<i class="v-icon material-icons mt-1">User 2</i>',
        resizable: false,
      }
    );
    this.showingevents = this.demoExample.events;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.el-popover {
  min-width: 0px;
}
.cal-container {
  padding: 5px;
}
$john: #42b983;
$kate: #ff7fc8;

.demo {
  .vuecal--month-view .vuecal__cell-content {
    justify-content: flex-start !important;
    height: 100% !important;
    align-items: flex-end !important;
  }

  .vuecal--month-view .vuecal__cell-date {
    padding: 4px;
  }
  .vuecal--month-view .vuecal__no-event {
    display: none;
  }

  .vuecal__event {
    border: 1px solid rgb(208, 208, 208);
  }
  .vuecal--month-view .vuecal__cell-content {
    justify-content: flex-start;
    height: 100%;
    align-items: flex-end;
  }

  .vuecal--month-view .vuecal__cell-date {
    padding: 4px;
  }
  .vuecal--month-view .vuecal__no-event {
    display: none;
  }
  border-radius: 4px;
  // Date picker.
  &.vuecal--date-picker .vuecal__cell-events-count {
    width: 4px;
    height: 4px;
    min-width: 0;
    padding: 0;
    margin-top: 4px;
    color: transparent;
    background-color: $john;
  }
  &.vuecal--date-picker .vuecal__cell--selected .vuecal__cell-events-count {
    background-color: #fff;
  }
  // Both calendars.
  .vuecal__cell--out-of-scope {
    color: rgba(0, 0, 0, 0.15);
  }
  // Full power calendar.
  // ------------------------------------------------------
  &.full-cal .vuecal__menu {
    background-color: transparent;
  }
  &.full-cal .vuecal__title-bar {
    background: rgba(0, 0, 0, 0.03);
  }
  .vuecal__view-btn {
    background: none;
    padding: 0 10px;
    margin: 4px 2px;
    border-radius: 30px;
    height: 20px;
    line-height: 20px;
    font-size: 13px;
    text-transform: uppercase;
    border: none;
    color: inherit;
    &--active {
      background: rgb(66, 185, 130);
      color: #fff;
    }
  }
  &.full-cal .weekday-label {
    opacity: 0.4;
    font-weight: 500;
  }
  .vuecal__header .v-icon {
    color: inherit;
  }
  &:not(.vuecal--day-view) .vuecal__cell--selected {
    background-color: transparent;
  }
  &:not(.vuecal--day-view).full-cal .vuecal__cell--selected:before {
    border: 1px solid rgba($john, 0.8);
  }
  .vuecal__event-time {
    margin: 3px 0;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
  }
  // John.
  .vuecal__header .john {
    color: darken($john, 5);
  }
  .vuecal__body .john {
    background-color: rgba($john, 0.08);
  }
  .vuecal__event {
    background-color: rgba(lighten($john, 5), 0.85);
    color: #fff;
  }
  .charging {
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba($john, 0.15) 10px,
      rgba($john, 0.15) 20px
    );
    color: transparentize(darken($john, 10), 0.4);
  }
  .charging {
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba($john, 0.15) 10px,
      rgba($john, 0.15) 20px
    );
    color: transparentize(darken($john, 10), 0.4);
  }
  .maintain {
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba($kate, 0.15) 10px,
      rgba($kate, 0.15) 20px
    );
    color: transparentize(darken($kate, 10), 0.4);
  }
  // Kate.
  .vuecal__header .kate {
    color: darken($kate, 5);
  }
  .vuecal__body .kate {
    background-color: rgba($kate, 0.08);
  }
  .kate .vuecal__event {
    background-color: rgba(lighten($kate, 5), 0.85);
    color: #fff;
  }
  .kate .charging {
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba($kate, 0.15) 10px,
      rgba($kate, 0.15) 20px
    );
    color: transparentize(darken($kate, 10), 0.4);
  }
  // ------------------------------------------------------
}
.vuecal__event-title {
  font-weight: bold;
}
</style>
