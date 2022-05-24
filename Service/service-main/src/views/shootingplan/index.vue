<template>
  <div class="cal-container">
    <el-row>
      <!-- <el-col :span="5">
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
            locale="ja"
          ></vue-cal>
        </el-card>
      </el-col> -->
      <el-row>
        <el-col :span="8">
          <el-select
            v-model="selected_satellite"
            placeholder="Type"
            class="filter-item"
            style="width: 230px"
            @change="handleSatelliteChange"
          >
            <el-option value="s01" label="衛星：SPHERE-01"
              >衛星：SPHERE-01</el-option
            >
            <el-option value="s02" label="衛星：SPHERE-02"
              >衛星：SPHERE-01</el-option
            >
            <el-option value="s03" label="衛星：SPHERE-03"
              >衛星：SPHERE-01</el-option
            >
          </el-select>
          <!-- <el-button
                @click="activeView = 'month'"
                type="text"
                style="margin-left: 15px"
                :disabled="activeView == 'month'"
                >月</el-button
              >
              <el-button
                @click="activeView = 'week'"
                type="text"
                :disabled="activeView == 'week'"
                >周</el-button
              > -->
        </el-col>
        <el-col :span="12" :offset="4">
          <el-row type="flex" justify="end">
            <el-button
              type="text"
              icon="el-icon-circle-plus-outline"
              @click="dialogCreationVisible = true"
            >
              イベント情報追加
            </el-button>
          </el-row>
          <el-row type="flex" justify="end">
            <el-input
              placeholder="イベント名称検索"
              style="width: 200px; margin-left: 10px"
              class="filter-item"
              v-model="search_title"
              @keyup.enter.native="handleFilter"
            />
            <el-button
              type="primary"
              style="width: 200px; height: 40px; margin-left: 10px"
              plain
              >イベント全件検索</el-button
            >
            <!-- <div
              style="
                width: 100px;
                height: 40px;
                display: flex;
                justify-content: center;
              "
            >
              <el-button
                @click="$refs.vuecal.previous()"
                icon="el-icon-caret-left"
                type="text"
                style="font-size: 25px"
              ></el-button>
              <el-button
                @click="$refs.vuecal.next()"
                icon="el-icon-caret-right"
                type="text"
                style="font-size: 25px"
              ></el-button>
            </div> -->
          </el-row>
          <el-row
            style="margin-top: 5px; margin-left: 10px"
            type="flex"
            justify="end"
          >
            <el-date-picker
              type="date"
              placeholder="開始"
              style="width: 200px"
            ></el-date-picker>
            <el-date-picker
              type="date"
              placeholder="終了"
              style="width: 200px"
            ></el-date-picker>
            <el-button style="width: 100px; margin-left: 10px" type="info" plain
              >一般公開</el-button
            >
          </el-row>
        </el-col>
      </el-row>
      <el-col :span="24">
        <el-card
          :body-style="{ padding: '5px 5px 10px 5px' }"
          style="margin: 5px; margin-top: 15px"
          shadow="hover"
          class="box-card demo"
        >
          <vue-cal
            class="full-cal vuecal--full-height-delete"
            :selected-date="selectedDate"
            :time-from="5 * 60"
            :timeStep="30"
            :time-to="24 * 60"
            startWeekOnSunday="true"
            sticky-split-labels="sticky-split-labels"
            :events.sync="showingevents"
            events-on-month-view="short"
            @cell-focus="selectedDate = $event.date || $event"
            :disable-views="['years', 'year', 'day']"
            style="height: 900px"
            locale="ja"
            active-view="week"
          >
            <template v-slot:split-label="{ split, view }">
              <strong :style="`color: ${split.color}`">{{
                split.label
              }}</strong>
            </template>
            <template v-slot:event="{ event, view }">
              <template v-if="view == 'month'">
                <el-popover
                  placement="right"
                  trigger="hover"
                  v-if="!event.hidden"
                >
                  <el-row type="flex" justify="space-between">
                    <el-button
                      type="primary"
                      icon="el-icon-edit"
                      size="mini"
                      circle
                      @click="(e) => onEventClick(event, e)"
                    ></el-button>
                  </el-row>
                  <div slot="reference">
                    <div class="vuecal__event-title" v-html="event.title"></div>
                    <em class="vuecal__event-time">
                      <span>{{ event.start.formatTime() }}</span>
                      <br />
                      <span> {{ event.end.formatTime() }}</span>
                    </em>
                  </div>
                </el-popover>
              </template>
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
                    <div
                      class="vuecal__event-title"
                      style="border-top: 0.8px black solid; border-left: "
                    >
                      <el-row style="height: 30px">
                        <el-col :span="12">
                          <div
                            style="
                              width: 100%;
                              padding-left: 20px;
                              display: flex;
                              justify-content: flex-start;
                              font-size: 24px;
                              padding-top: 5px;
                            "
                          >
                            <div v-html="event.title"></div>
                          </div>
                        </el-col>
                        <el-col :span="10">
                          <div
                            style="
                              width: 100%;
                              display: flex;
                              justify-content: flex-end;
                              font-size: 24px;
                              padding-top: 5px;
                            "
                          >
                            <div v-html="event.content"></div>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <hr />
                    <em class="vuecal__event-time">
                      <strong>開始時間: </strong>
                      <span>{{ event.start.formatTime() }}</span>
                      <br />
                      <strong>終了時間: </strong>
                      <span> {{ event.end.formatTime() }}</span>
                    </em>
                    <el-row>
                      <el-col :span="12">
                        <div
                          style="
                            width: 100%;
                            display: flex;
                            justify-content: flex-start;
                            font-size: 25px;
                            padding-top: 4px;
                          "
                        >
                          <div v-html="event.extra_bottom_left"></div>
                        </div>
                      </el-col>
                      <el-col :span="10">
                        <div
                          style="
                            width: 100%;
                            display: flex;
                            justify-content: flex-end;
                            font-size: 25px;
                            padding-top: 4px;
                          "
                        >
                          <div v-html="event.extra_bottom_right"></div>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-popover>
              </div>
            </template>
            <template v-slot:cell-content="{ cell, view, events, goNarrower }">
              <div
                class="vuecal__cell-date"
                style="width: 100%"
                :class="view.id"
                v-if="view.id === 'month'"
              >
                <el-row style="padding: 0px">
                  <el-col :span="5">
                    <div>
                      {{ cell.content }}
                    </div>
                  </el-col>
                  <el-col :offset="14" :span="5">
                    <div>
                      <i
                        v-if="
                          (cell.startDate.getMonth() + 1 == 5 &&
                            Number(cell.content) <= 10) ||
                          (Number(cell.content) > 12 &&
                            Number(cell.content) <= 18) ||
                          Number(cell.content) == 20 ||
                          Number(cell.content) == 21
                        "
                        style="
                          font-size: 28px;
                          color: #67c23a;
                          font-weight: bold;
                        "
                        class="el-icon-check"
                        @click="
                          dialogDetailVisible = true;
                          selected_month_type = 4;
                        "
                      ></i>
                      <i
                        v-if="
                          (cell.startDate.getMonth() + 1 == 5 &&
                            Number(cell.content) == 11) ||
                          Number(cell.content) == 19
                        "
                        style="
                          font-size: 28px;
                          color: #f56c6c;
                          font-weight: bold;
                        "
                        class="el-icon-warning"
                        @click="
                          dialogDetailVisible = true;
                          selected_month_type = 3;
                        "
                      ></i>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div class="vuecal__cell-events-count" v-if="view.id === 'month'">
                <el-row style="padding: 0px">
                  <!-- <el-col :span="2">
                    <i
                      v-if="
                        cell.startDate.getMonth() + 1 == 5 &&
                        Number(cell.content) <= 7 &&
                        Number(cell.content) >= 2
                      "
                      class="el-icon-message"
                      style="color: #409eff; font-size: 28px"
                      @click="
                        dialogDetailVisible = true;
                        selected_month_type = 2;
                      "
                    />
                    <i
                      v-else
                      class="el-icon-message"
                      style="color: #409eff; font-size: 20px; opacity: 0"
                    />
                  </el-col>
                  <el-col :offset="18" :span="2">
                    <font-awesome-icon
                      v-if="
                        (cell.startDate.getMonth() + 1 == 5 &&
                          Number(cell.content) <= 10) ||
                        (Number(cell.content) > 12 &&
                          Number(cell.content) <= 16) ||
                        Number(cell.content) == 20 ||
                        Number(cell.content) == 21
                      "
                      icon="fa-solid fa-satellite"
                      style="color: #409eff; font-size: 28px"
                      @click="
                        dialogDetailVisible = true;
                        selected_month_type = 5;
                      "
                    />
                  </el-col> -->
                </el-row>
              </div>
            </template>
          </vue-cal>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog :visible.sync="dialogDetailVisible" >
      <!-- 确 -->
      <div v-if="selected_month_type == '1'">
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>イベント詳細</div>
          <br />
          <div>
            <el-button
              @click="$refs.vuecal.previous()"
              icon="el-icon-caret-left"
              type="text"
              style="font-size: 25px"
            ></el-button>

            <span style="width: 100%; padding: 10px"> ABCフェス</span>

            <el-button
              @click="$refs.vuecal.next()"
              icon="el-icon-caret-right"
              type="text"
              style="font-size: 25px"
            ></el-button>
          </div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>20:00 - 21:00</div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>撮影周回</div>
          <div>●リアルタイム撮影</div>
          <div>●一般公開</div>
          <div>●スタンダード</div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>通信パス：未予約</div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>
            <span style="font-size: 18px; color: #409eff; font-weight: bold"
              >確</span
            ><span style="width: 100%; padding: 10px">運用計画確定</span>
          </div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>ダウンロード予定日：‐</div>
        </el-row>
      </div>
      <!-- 邮件 -->
      <div v-if="selected_month_type == '2'">
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>イベント詳細</div>
          <br />
          <div>
            <el-button
              @click="$refs.vuecal.previous()"
              icon="el-icon-caret-left"
              type="text"
              style="font-size: 25px"
            ></el-button>

            <span style="width: 100%; padding: 10px"> ABCフェス</span>

            <el-button
              @click="$refs.vuecal.next()"
              icon="el-icon-caret-right"
              type="text"
              style="font-size: 25px"
            ></el-button>
          </div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>20:00 - 21:00</div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>撮影周回</div>
          <div>●リアルタイム撮影</div>
          <div>●一般公開</div>
          <div>●スタンダード</div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>通信パス：予約済み</div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>
            <span style="font-size: 18px; color: #409eff; font-weight: bold"
              >確</span
            ><span style="width: 100%; padding: 10px">運用計画確定</span>
          </div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>
            ダウンロード予定日：2022―06―10
            <el-button type="primary" @click="dialogDetailVisible = false"
              >通知</el-button
            >
          </div>
        </el-row>
      </div>
      <!-- 警告 -->
      <div v-if="selected_month_type == '3'">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>イベント詳細</span>
                <div class="text item">
                          <el-button
                            @click="$refs.vuecal.previous()"
                            icon="el-icon-caret-left"
                            type="text"
                            style="font-size: 20px"
                          ></el-button>

                              <i class="el-icon-star-on" style="color:#ffa600"></i>
                              <span class="demonstration">ABCフェス</span>
                              <i class="el-icon-warning" style="color:#ff6361"></i>
                            <el-button
                            @click="$refs.vuecal.next()"
                            icon="el-icon-caret-right"
                            type="text"
                            style="font-size: 20px"
                          ></el-button>
                </div>
              </div>
              <div class="text item">
                  <el-form :model="form">
                    <el-form-item label="時刻" :label-width="formLabelWidth">
                    <el-col :span="8" style="margin-left: 10px; font-size: 20px">
                      <el-input
                        placeholder="20:00-21:00"
                        v-model="input"
                        :disabled="true">
                      </el-input>
                    </el-col>
                    </el-form-item>

                    <el-form-item label="撮影周回" :label-width="formLabelWidth">

                    <el-col :span="24" style="margin-left: 10px; font-size: 20px">
                    <el-switch v-model="value1">
                    </el-switch>
                    </el-col>

                    <el-col :span="24" style="margin-left: 10px; font-size: 20px">


                        <el-select v-model="form.region" placeholder="予約撮影">
                            <el-option label="予約撮影" value="shanghai"></el-option>
                            <el-option label="リアルタイム" value="beijing"></el-option>
                        </el-select>

                    </el-col>
                    
                    <el-col :span="24" style="margin-left: 10px; font-size: 20px">
                        <el-select v-model="form.region" placeholder="一般公開">
                            <el-option label="一般公開" value="shanghai"></el-option>
                            <el-option label="ムーブメント枠" value="shanghai"></el-option>
                            <el-option label="B2B利用" value="beijing"></el-option>
                        </el-select>

                    </el-col>

                    <el-col :span="24" style="margin-left: 10px; font-size: 20px">
                    <el-button type="primary"  style="margin-left: 165px;" >適用</el-button>
                    </el-col>
              
                    </el-form-item>


                    <el-form-item label="撮影補正周回" :label-width="formLabelWidth">

                    <el-col :span="24" style="margin-left: 10px; font-size: 20px">
                    <el-switch v-model="value1">
                    </el-switch>
                    </el-col>
                    </el-form-item>

                    <el-form-item label="通信パス" :label-width="formLabelWidth">
                    <el-col :span="8" style="margin-left: 10px; font-size: 20px">
                      <el-input
                        placeholder="未予約"
                        v-model="input"
                        :disabled="true">
                      </el-input>
                    </el-col>
                    </el-form-item>

                    <el-form-item label="" :label-width="formLabelWidth">
                        <i class="el-icon-warning-outline" style="color: #ff4240;margin-left: 10px;font-size: 20px"></i>
                        <span style="width: 100%; padding: 10px" >通信パスが予約できませんでした</span>
                    </el-form-item>

                  </el-form>
              </div>
            </el-card>
      </div>
      <!-- 对钩 -->
      <!-- <div v-if="selected_month_type == '4'">
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>详情</div>
          <div>ABC</div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>20:00 - 21:00</div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>20:00 - 21:00</div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>
            <i
              style="font-size: 18px; color: #67c23a; font-weight: bold"
              class="el-icon-check"
            ></i>
          </div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>20:00 - 21:00</div>
        </el-row>
      </div> -->
      <!-- 卫星 -->
      <div v-if="selected_month_type == '5'">
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>イベント詳細</div>
          <br />
          <div>
            <el-button
              @click="$refs.vuecal.previous()"
              icon="el-icon-caret-left"
              type="text"
              style="font-size: 25px"
            ></el-button>

            <span style="width: 100%; padding: 10px"> ABCフェス</span>

            <el-button
              @click="$refs.vuecal.next()"
              icon="el-icon-caret-right"
              type="text"
              style="font-size: 25px"
            ></el-button>
          </div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>20:00 - 21:00</div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>撮影周回</div>
          <div>●リアルタイム撮影</div>
          <div>●一般公開</div>
          <div>●スタンダード</div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>通信パス：未予約</div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>
            <span style="font-size: 18px; color: #409eff; font-weight: bold"
              >確</span
            ><span style="width: 100%; padding: 10px">運用計画確定</span>
          </div>
        </el-row>
        <el-row
          style="border: 1px black solid; width: 100%; padding: 10px"
          align="center"
          justify="center"
        >
          <div>
            <span style="width: 100%; padding: 10px"
              >ダウンロード予定日：2022―06―10</span
            >
            <el-button type="primary" @click="dialogDetailVisible = false"
              >通知</el-button
            >
          </div>
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer">
        <!-- <el-button type="primary" @click="dialogDetailVisible = false"
          >Cancel</el-button
        > -->
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogFormVisible">
      <!-- メンテナンス運用設定時-->
      <div v-if="selected_week_type == '1'">
        <el-form :model="form">
          <el-form-item label="利用用途" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-input
                placeholder="メンテナンス運用"
                v-model="input"
                :disabled="true"
              >
              </el-input>
            </el-col>
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-button type="primary" @click="dialogDetailVisible = false">
                メンテナンス運用設定
              </el-button>
            </el-col>
            <el-col :span="4" style="margin-left: 10px; font-size: 20px">
              <el-button type="warning" @click="dialogDetailVisible = false">
                解除
              </el-button>
            </el-col>
          </el-form-item>
          <el-form-item label="時刻" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-input
                placeholder="20:00-21:00"
                v-model="input"
                :disabled="true"
              >
              </el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="通信パス" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-input placeholder="未予約" v-model="input" :disabled="true">
              </el-input>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
      <!-- 未設定時 -->
      <div v-if="selected_week_type == '2'">
        <el-form :model="form">
          <el-form-item label="利用用途" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-input placeholder="未設定" v-model="input" :disabled="true">
              </el-input>
            </el-col>
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-button type="primary" @click="dialogDetailVisible = false">
                メンテナンス運用設定
              </el-button>
            </el-col>
            <el-col :span="4" style="margin-left: 10px; font-size: 20px">
              <!-- <el-button type="warning" @click="dialogDetailVisible = false">
              解除
            </el-button> -->
            </el-col>
          </el-form-item>
          <el-form-item label="時刻" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-input
                placeholder="20:00-21:00"
                v-model="input"
                :disabled="true"
              >
              </el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="通信パス" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-input placeholder="未予約" v-model="input" :disabled="true">
              </el-input>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
      <!-- 予約撮影時-->
      <div v-if="selected_week_type == '3'">
        <el-form :model="form">
          <el-form-item label="利用用途" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-input placeholder="予約撮影" v-model="input" :disabled="true">
              </el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="時刻" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-input
                placeholder="20:00-21:00"
                v-model="input"
                :disabled="true"
              >
              </el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="通信パス" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-input placeholder="未予約" v-model="input" :disabled="true">
              </el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="詳細" :label-width="formLabelWidth">
            <el-col :span="12" style="margin-left: 10px; font-size: 20px">
              <el-tag type="info">優先度</el-tag>
              <el-dropdown
                split-button
                type="primary"
                style="margin-left: 59px; font-size: 20px"
              >
                standard
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>low</el-dropdown-item>
                  <el-dropdown-item>high</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="12" style="margin-left: 10px; font-size: 20px">
              <el-tag type="info">利用形式</el-tag>
              <el-dropdown
                split-button
                type="primary"
                style="margin-left: 50px; font-size: 20px"
              >
                一般公開
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>ムーブメント枠</el-dropdown-item>
                  <el-dropdown-item>B2B利用</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-form-item>
          <el-form-item label="公開状況" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-input placeholder="未公開" v-model="input" :disabled="true">
              </el-input>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
      <!-- ダウンリンク運用時 -->
      <div v-if="selected_week_type == '4'">
        <el-form :model="form">
          <el-form-item label="利用用途" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-input
                placeholder="ダウンリンク"
                v-model="input"
                :disabled="true"
              >
              </el-input>
            </el-col>
            <!-- <el-col :span="8" style="margin-left: 10px; font-size: 20px">
            <el-button type="primary" @click="dialogDetailVisible = false">
              メンテナンス運用設定
            </el-button>
        </el-col> -->
            <el-col :span="4" style="margin-left: 10px; font-size: 20px">
              <!-- <el-button type="warning" @click="dialogDetailVisible = false">
              解除
            </el-button> -->
            </el-col>
          </el-form-item>
          <el-form-item label="時刻" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-input
                placeholder="20:00-21:00"
                v-model="input"
                :disabled="true"
              >
              </el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="通信パス" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-input placeholder="予約済み" v-model="input" :disabled="true">
              </el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
            </el-col>
            <el-col :span="4" style="margin-left: 74px; font-size: 20px">
              <el-button type="primary" @click="dialogDetailVisible = false">
                ダウンリンク計画作成
              </el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
      <!-- 成立検証結果、問題があった場合 -->
      <div v-if="selected_week_type == '5'">
        <el-form :model="form">
          <el-form-item label="利用用途" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-input
                placeholder="ダウンリンク運用"
                v-model="input"
                :disabled="true"
              >
              </el-input>
            </el-col>
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <i
                class="el-icon-warning-outline"
                style="color: #ff4240; margin-left: 10px; font-size: 20px"
              ></i>
            </el-col>
          </el-form-item>
          <el-form-item label="時刻" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-input
                placeholder="20:00-21:00"
                v-model="input"
                :disabled="true"
              >
              </el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="通信パス" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 20px">
              <el-input placeholder="未予約" v-model="input" :disabled="true">
              </el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="通信パス" :label-width="formLabelWidth">
            <el-col :span="8" style="margin-left: 10px; font-size: 10px">
              <el-row
                style="border: 1px black solid; width: 100%; padding: 10px"
                align="center"
                justify="center"
              >
                <div>
                  <i
                    class="el-icon-warning-outline"
                    style="color: #ff4240; margin-left: 10px; font-size: 20px"
                  ></i>
                </div>
                <div>
                  <span
                    style="color: #ff4240; margin-left: 10px; font-size: 10px"
                    >成立検証に失敗しました</span
                  >
                </div>
                <span style="color: #ff4240; margin-left: 10px; font-size: 10px"
                  >原因：XXXXX</span
                >
                <div>
                  <span
                    style="color: #ff4240; margin-left: 10px; font-size: 10px"
                    >解決策：XXXX</span
                  >
                </div>
              </el-row>
            </el-col>
          </el-form-item>

          <el-form-item label="" :label-width="formLabelWidth">
            <el-col :span="4" style="margin-left: 175px; font-size: 20px">
              <el-button type="primary" @click="dialogDetailVisible = false">
                再計画
              </el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
      <!-- Test 1 -->
      <div v-if="selected_week_type == '6'">
      
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>イベント詳細</span>
                  <div class="text item">
                            <el-button
                              @click="$refs.vuecal.previous()"
                              icon="el-icon-caret-left"
                              type="text"
                              style="font-size: 20px"
                            ></el-button>

                                <i class="el-icon-star-on" style="color:#ffa600"></i>
                                <span class="demonstration">ABCフェス</span>
                                
                              <el-button
                              @click="$refs.vuecal.next()"
                              icon="el-icon-caret-right"
                              type="text"
                              style="font-size: 20px"
                            ></el-button>
                  </div>
          </div>
          <div class="text item">
              <el-form :model="form">
                <el-form-item label="時刻" :label-width="formLabelWidth">
                  <el-col :span="8" style="margin-left: 10px; font-size: 20px">
                    <el-input
                      placeholder="20:00-21:00"
                      v-model="input"
                      :disabled="true"
                    >
                    </el-input>
                  </el-col>
                </el-form-item>

                <el-form-item label="撮影周回" :label-width="formLabelWidth">
                  <el-col :span="24" style="margin-left: 10px; font-size: 20px">
                    <el-switch v-model="value2_switch"> </el-switch>
                  </el-col>
                  <div v-show="value2_switch">
                    <el-col :span="24" style="margin-left: 10px; font-size: 20px">
                      <el-select v-model="form.region" placeholder="予約撮影">
                        <el-option label="予約撮影" value="shanghai"></el-option>
                        <el-option
                          label="リアルタイム"
                          value="beijing"
                        ></el-option>
                      </el-select>
                    </el-col>

                    <el-col :span="24" style="margin-left: 10px; font-size: 20px">
                      <el-select v-model="form.region" placeholder="一般公開">
                        <el-option label="一般公開" value="shanghai"></el-option>
                        <el-option
                          label="ムーブメント枠"
                          value="shanghai"
                        ></el-option>
                        <el-option label="B2B利用" value="beijing"></el-option>
                      </el-select>
                    </el-col>

                    <el-col :span="24" style="margin-left: 10px; font-size: 20px">
                      <el-button type="primary" style="margin-left: 165px"
                        >適用</el-button
                      >
                    </el-col>
                  </div>
                </el-form-item>

                <el-form-item label="撮影補正周回" :label-width="formLabelWidth">
                  <el-col :span="24" style="margin-left: 10px; font-size: 20px">
                    <el-switch v-model="value3_switch"> </el-switch>
                    <div v-show="value3_switch"></div>
                  </el-col>
                </el-form-item>

                <el-form-item label="通信パス" :label-width="formLabelWidth">
                  <el-col :span="8" style="margin-left: 10px; font-size: 20px">
                    <el-input
                      placeholder="未予約"
                      v-model="input"
                      :disabled="true"
                    >
                    </el-input>
                  </el-col>
                </el-form-item>

                <el-form-item label="運用計画" :label-width="formLabelWidth">
                  <el-col :span="8" style="margin-left: 10px; font-size: 20px">
                    <el-input placeholder="確定" v-model="input" :disabled="true">
                    </el-input>
                  </el-col>
                </el-form-item>

                <el-form-item
                  label="ダウンロード予定日"
                  :label-width="formLabelWidth"
                >
                  <el-col :span="8" style="margin-left: 10px; font-size: 20px">
                    <el-input placeholder="――" v-model="input" :disabled="true">
                    </el-input>
                  </el-col>
                </el-form-item>
              </el-form>
            </div>
        </el-card>

      </div>
      <!-- Test 2 -->
      <div v-if="selected_week_type == '7'">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>イベント詳細</span>
                  <div class="text item">
                            <el-button
                              @click="$refs.vuecal.previous()"
                              icon="el-icon-caret-left"
                              type="text"
                              style="font-size: 20px"
                            ></el-button>

                                <i class="el-icon-star-on" style="color:#ffa600"></i>
                                <span class="demonstration">ABCフェス</span>
                                
                              <el-button
                              @click="$refs.vuecal.next()"
                              icon="el-icon-caret-right"
                              type="text"
                              style="font-size: 20px"
                            ></el-button>
                  </div>
          </div>
          <div class="text item">
              <el-form :model="form">
                <el-form-item label="時刻" :label-width="formLabelWidth">
                  <el-col :span="8" style="margin-left: 10px; font-size: 20px">
                    <el-input
                      placeholder="20:00-21:00"
                      v-model="input"
                      :disabled="true"
                    >
                    </el-input>
                  </el-col>
                </el-form-item>

                <el-form-item label="撮影周回" :label-width="formLabelWidth">
                  <el-col :span="24" style="margin-left: 10px; font-size: 20px">
                    <el-switch v-model="value1_switch"> </el-switch>
                  </el-col>
                  <div v-show="value1_switch">
                    <el-col :span="24" style="margin-left: 10px; font-size: 20px">
                      <el-select v-model="form.region" placeholder="予約撮影">
                        <el-option label="予約撮影" value="shanghai"></el-option>
                        <el-option
                          label="リアルタイム"
                          value="beijing"
                        ></el-option>
                      </el-select>
                    </el-col>

                    <el-col :span="24" style="margin-left: 10px; font-size: 20px">
                      <el-select v-model="form.region" placeholder="一般公開">
                        <el-option label="一般公開" value="shanghai"></el-option>
                        <el-option
                          label="ムーブメント枠"
                          value="shanghai"
                        ></el-option>
                        <el-option label="B2B利用" value="beijing"></el-option>
                      </el-select>
                    </el-col>

                    <el-col :span="24" style="margin-left: 10px; font-size: 20px">
                      <el-button type="primary" style="margin-left: 165px"
                        >適用</el-button
                      >
                    </el-col>
                  </div>
                </el-form-item>

                <el-form-item label="撮影補正周回" :label-width="formLabelWidth">
                  <el-col :span="24" style="margin-left: 10px; font-size: 20px">
                    <el-switch v-model="value3_switch"> </el-switch>
                    <div v-show="value3_switch"></div>
                  </el-col>
                </el-form-item>

                <el-form-item label="通信パス" :label-width="formLabelWidth">
                  <el-col :span="8" style="margin-left: 10px; font-size: 20px">
                    <el-input
                      placeholder="未予約"
                      v-model="input"
                      :disabled="true"
                    >
                    </el-input>
                  </el-col>
                </el-form-item>

                <el-form-item label="運用計画" :label-width="formLabelWidth">
                  <el-col :span="8" style="margin-left: 10px; font-size: 20px">
                    <el-input placeholder="確定" v-model="input" :disabled="true">
                    </el-input>
                  </el-col>
                </el-form-item>

                <el-form-item
                  label="ダウンロード予定日"
                  :label-width="formLabelWidth"
                >
                  <el-col :span="8" style="margin-left: 10px; font-size: 20px">
                    <el-input placeholder="――" v-model="input" :disabled="true">
                    </el-input>
                  </el-col>
                </el-form-item>
              </el-form>
            </div>
        </el-card>
      </div>

    </el-dialog>

    <el-dialog title="イベント追加" :visible.sync="dialogCreationVisible">
      <el-form :model="form">
        <el-form-item label="イベント種別" :label-width="formLabelWidth">
          <el-radio-group v-model="form.resource">
            <el-radio label="1"
              ><i
                class="el-icon-video-camera-solid"
                style="color: #ff4240; margin-left: 10px; font-size: 20px"
              ></i
            ></el-radio>
            <el-radio label="2"
              ><i
                class="el-icon-s-promotion"
                style="color: #ff4240; margin-left: 10px; font-size: 20px"
              ></i
            ></el-radio>
            <el-radio label="3"
              ><i
                class="el-icon-school"
                style="color: #ff4240; margin-left: 10px; font-size: 20px"
              ></i
            ></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="イベント名" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="開始時間" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.start_time"
            type="datetime"
            placeholder=""
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="終了時間" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.end_time"
            type="datetime"
            placeholder=""
          >
          </el-date-picker>
        </el-form-item>
        <!-- <el-form-item label="Event Description" :label-width="formLabelWidth">
          <el-input v-model="form.desc" autocomplete="off"></el-input>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogCreationVisible = false">キャンセル</el-button>
        <el-button type="primary" @click="handleEventCreate">追加</el-button>
      </div>
    </el-dialog>

    <!-- <el-dialog
      title="Delete Event"
      :visible.sync="dialogDeleteVisible"
      width="350px"
    >
      <span>Are you sure you want to delete this event</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDeleteVisible = false">キャンセル</el-button>
        <el-button type="danger" @click="handleEventDelete()">削除</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>

<script>
import VueCal from "vue-cal";
import { uuid } from "vue-uuid";

import "vue-cal/dist/vuecal.css";
import "vue-cal/dist/i18n/ja.js";
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
    dialogDetailVisible: false,
    selected_month_type: "1",
    selected_week_type: "1",
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
    selectedDate: new Date("2022-05-08"),
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
    value1_switch: false,
    value2_switch: false,
    value3_switch: false,
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
      console.log(event);
      if (!event.class) {
        this.selected_week_type = "1";
      } else if (event.class == "empty") {
        this.selected_week_type = "2";
      } else if (event.class == "charging") {
        this.selected_week_type = "3";
      } else if (event.class == "download") {
        this.selected_week_type = "4";
      } else if (event.class == "error") {
        this.selected_week_type = "5";
      } else if (event.class == "test1") {
        this.selected_week_type = "6";
      } else if (event.class == "test2") {
        this.selected_week_type = "7";
      }
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
            title: "有料",
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
            title: "メンテナンス",
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
            title: "予約撮影 1",
            content: '<i class="v-icon material-icons mt-1"></i>',
            resizable: false,
          },
          {
            id: 3,
            start: `${tuesday} 08:00`,
            end: `${tuesday} 10:00`,
            title: "予約撮影 3",
            content: '<i class="v-icon material-icons mt-1">User 2</i>',
            resizable: false,
          },
          {
            id: 4,
            start: `${thursday} 09:00`,
            end: `${thursday} 11:30`,
            title: "予約撮影 4",
            content: '<i class="v-icon material-icons mt-2">User 1</i>',
            resizable: false,
          },
          {
            id: 5,
            start: `${friday} 16:45`,
            end: `${friday} 18:45`,
            title: "予約撮影 ",
            content: '<i class="v-icon material-icons mt-1">User 2</i>',
            resizable: false,
          }
        );
      } else {
        this.demoExample.events.push(
          {
            id: 1,
            start: `2022-05-08 09:00`,
            end: `2022-05-08 10:30`,
            title: "予約撮影 1",
            content: '<i class="v-icon material-icons mt-1"></i>',
            resizable: false,
          },
          {
            id: 3,
            start: `${tuesday} 08:00`,
            end: `${tuesday} 10:00`,
            title: "予約撮影 3",
            content: '<i class="v-icon material-icons mt-1">User 2</i>',
            resizable: false,
          },
          {
            id: 4,
            start: `${thursday} 09:00`,
            end: `${thursday} 11:30`,
            title: "予約撮影 4",
            content: '<i class="v-icon material-icons mt-2">User 1</i>',
            resizable: false,
          },
          {
            id: 5,
            start: `${friday} 16:45`,
            end: `${friday} 18:45`,
            title: "予約撮影 ",
            content: '<i class="v-icon material-icons mt-1">User 2</i>',
            resizable: false,
          }
        );

        const monday = this.previousFirstDayOfWeek.format();
        const tuesday = this.previousFirstDayOfWeek.addDays(1).format();
        const thursday = this.previousFirstDayOfWeek.addDays(3).format();
        const friday = this.previousFirstDayOfWeek.addDays(4).format();
        this.demoExample.events.push(
          {
            id: 1,
            start: `${monday} 15:30`,
            end: `${monday} 17:30`,
            title: "予約撮影 1",
            content: '<i class="v-icon material-icons mt-1"></i>',
            resizable: false,
          },
          {
            id: 3,
            start: `${tuesday} 08:00`,
            end: `${tuesday} 10:00`,
            title: "予約撮影 3",
            content: '<i class="v-icon material-icons mt-1">User 2</i>',
            resizable: false,
          },
          {
            id: 4,
            start: `${thursday} 09:00`,
            end: `${thursday} 11:30`,
            title: "予約撮影 4",
            content: '<i class="v-icon material-icons mt-1">User 1</i>',
            resizable: false,
          },
          {
            id: 5,
            start: `${friday} 16:45`,
            end: `${friday} 18:45`,
            title: "予約撮影 ",
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
    handleTreeClick() {
      this.$router.push("/plan/tree");
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
    this.demoExample.events.push(
      {
        id: 1,
        hidden: true,
        start: `2022-05-08 09:00`,
        end: `2022-05-08 10:30`,
        // title: "Maintain",
        content: '<i class="el-icon-s-tools"></i>',
        resizable: false,
        class: "default",
      },
      {
        id: 2,
        hidden: true,
        start: `2022-05-10 06:00`,
        end: `2022-05-10 07:30`,
        // title: "Maintain",
        content: '<i class="el-icon-s-tools"></i>',
        resizable: false,
        class: "default",
      },
      {
        id: 3,
        hidden: true,
        start: `2022-05-10 09:00`,
        end: `2022-05-10 10:30`,
        // title: "Maintain",
        content: '<i class="el-icon-s-tools"></i>',
        resizable: false,
        class: "default",
      },
      {
        id: 4,
        hidden: true,
        start: `2022-05-12 06:00`,
        end: `2022-05-12 07:30`,
        // title: "Maintain",
        content: '<i class="el-icon-s-tools"></i>',
        resizable: false,
        class: "default",
      },
      {
        id: 5,
        hidden: true,
        start: `2022-05-12 09:00`,
        end: `2022-05-12 10:30`,
        // title: "Maintain",
        content: '<i class="el-icon-s-tools"></i>',
        resizable: false,
        class: "default",
      },
      {
        id: 6,
        hidden: true,
        start: `2022-05-12 10:30`,
        end: `2022-05-12 12:00`,
        // title: "Maintain",
        content: '<i class="el-icon-s-tools"></i>',
        resizable: false,
        class: "default",
      },
      {
        id: 7,
        hidden: true,
        start: `2022-05-13 10:30`,
        end: `2022-05-13 12:00`,
        // title: "Maintain",
        content: '<i class="el-icon-s-tools"></i>',
        resizable: false,
        class: "default",
      },
      {
        id: 8,
        hidden: true,
        start: `2022-05-08 6:00`,
        end: `2022-05-08 7:30`,
        // // title: "Empty Slot",
        class: "empty",
        content: "",
        resizable: false,
      },
      {
        id: 9,
        hidden: true,
        start: `2022-05-08 7:30`,
        end: `2022-05-08 9:00`,
        // // title: "Empty Slot",
        class: "empty",
        content: "",
        resizable: false,
      },
      {
        id: 10,
        hidden: true,
        start: `2022-05-08 10:30`,
        end: `2022-05-08 12:00`,
        // // title: "Empty Slot",
        class: "empty",
        content: "",
        resizable: false,
      },
      {
        id: 11,
        hidden: true,
        start: `2022-05-09 07:30`,
        end: `2022-05-08 9:00`,
        // title: "Empty Slot",
        class: "empty",
        content: "",
        resizable: false,
      },
      {
        id: 12,
        hidden: true,
        start: `2022-05-09 9:00`,
        end: `2022-05-09 10:30`,
        // title: "Empty Slot",
        class: "empty",
        content: "",
        resizable: false,
      },
      {
        id: 19,
        hidden: true,
        start: `2022-05-09 7:30`,
        end: `2022-05-09 9:00`,
        // title: "Empty Slot",
        class: "empty",
        content: "",
        resizable: false,
      },
      {
        id: 13,
        hidden: true,
        start: `2022-05-11 6:00`,
        end: `2022-05-11 07:30`,
        // title: "Empty Slot",
        class: "empty",
        content: "",
        resizable: false,
      },
      {
        id: 14,
        hidden: true,
        start: `2022-05-11 7:30`,
        end: `2022-05-11 9:00`,
        // title: "Empty Slot",
        class: "empty",
        content: "",
        resizable: false,
      },
      {
        id: 15,
        hidden: true,
        start: `2022-05-11 9:00`,
        end: `2022-05-11 10:30`,
        // title: "Empty Slot",
        class: "empty",
        content: "",
        resizable: false,
      },
      {
        id: 16,
        hidden: true,
        start: `2022-05-13 6:00`,
        end: `2022-05-13 7:30`,
        // title: "Empty Slot",
        class: "empty",
        content: "",
        resizable: false,
      },
      {
        id: 17,
        hidden: true,
        start: `2022-05-13 7:30`,
        end: `2022-05-13 9:00`,
        // title: "Empty Slot",
        class: "empty",
        content: "",
        resizable: false,
      },
      {
        id: 18,
        hidden: true,
        start: `2022-05-14 6:00`,
        end: `2022-05-14 7:30`,
        // title: "Empty Slot",
        class: "empty",
        content: "",
        resizable: false,
      },
      {
        id: 19,
        hidden: true,
        start: `2022-05-14 7:30`,
        end: `2022-05-14 9:00`,
        // title: "Empty Slot",
        class: "empty",
        content: "",
        resizable: false,
      },
      {
        id: 20,
        hidden: true,
        start: `2022-05-14 10:30`,
        end: `2022-05-14 12:00`,
        // title: "Empty Slot",
        class: "empty",
        content: "",
        resizable: false,
      },
      {
        id: 21,
        hidden: true,
        start: `2022-05-09 6:00`,
        end: `2022-05-09 7:30`,
        // title: "预约拍摄",
        title: '<i class="el-icon-message" style="color:#409EFF"></i>',
        class: "charging",
        content: '<i class="el-icon-camera-solid"></i>',
        resizable: false,
      },
      {
        id: 22,
        hidden: true,
        start: `2022-05-10 7:30`,
        end: `2022-05-09 9:00`,
        title: '<i class="el-icon-message"></i>',
        // title: "预约拍摄",
        class: "charging",
        content: '<i class="el-icon-camera-solid"></i>',
        resizable: false,
      },
      {
        id: 22,
        hidden: true,
        start: `2022-05-10 7:30`,
        end: `2022-05-10 9:00`,
        // title: "预约拍摄",
        title: '<i class="el-icon-message" style="color:#409EFF"></i>',
        class: "charging",
        content: '<i class="el-icon-camera-solid"></i>',
        resizable: false,
      },
      {
        id: 23,
        hidden: true,
        start: `2022-05-10 10:30`,
        end: `2022-05-10 12:00`,
        // title: "预约拍摄",
        class: "shooting",
        title: '<i class="el-icon-message" style="color:#409EFF"></i>',
        content: '<i class="el-icon-video-camera-solid"></i>',
        extra_bottom_right: '<i class="el-icon-user-solid" /></i>',
        resizable: false,
      },
      {
        id: 23,
        hidden: true,
        start: `2022-05-09 10:30`,
        end: `2022-05-09 12:00`,
        // title: "拍摄",
        class: "shooting",
        title: '<i class="el-icon-message"></i>',
        content: '<i class="el-icon-video-camera-solid"></i>',
        extra_bottom_right: '<i class="el-icon-user-solid" /></i>',
        resizable: false,
      },
      {
        id: 23,
        hidden: true,
        start: `2022-05-12 7:30`,
        end: `2022-05-12 9:00`,
        title: '<i class="el-icon-lightning" style="color:#409EFF"></i>',
        class: "shooting",
        content: '<i class="el-icon-video-camera-solid"></i>',
        extra_bottom_right: '<i class="el-icon-user-solid" /></i>',
        resizable: false,
      },
      {
        id: 24,
        hidden: true,
        start: `2022-05-13 9:00`,
        end: `2022-05-13 10:30`,
        title: '<i class="el-icon-lightning" style="color:#409EFF"></i>',
        class: "shooting",
        content: '<i class="el-icon-video-camera-solid"></i>',
        extra_bottom_right: '<i class="el-icon-user-solid" /></i>',
        resizable: false,
      },
      {
        id: 25,
        hidden: true,
        start: `2022-05-11 10:30`,
        end: `2022-05-11 12:00`,
        title: '<i class="el-icon-lightning"></i>',
        class: "download",
        content: '<i class="el-icon-download"></i>',
        resizable: false,
      },
      {
        id: 25,
        hidden: true,
        start: `2022-05-14 9:00`,
        end: `2022-05-14 10:30`,
        // title: '<i class="el-icon-place"></i>',
        class: "error",
        content: '<i class="el-icon-download"></i>',
        extra_bottom_left: '<i class="el-icon-warning" /></i>',
        resizable: false,
      },
      {
        id: 30,
        hidden: false,
        start: `2022-05-20 20:00`,
        end: `2022-05-20 21:30`,
        title: "☆ABCフェス　その他3件",
        class: "test1",
        content: '<i class="el-icon-download"></i>',
        extra_bottom_left: '<i class="el-icon-warning" /></i>',
        resizable: false,
      },
      {
        id: 30,
        hidden: false,
        start: `2022-05-15 20:00`,
        end: `2022-05-15 21:30`,
        title: "☆ABCフェス",
        class: "test2",
        content: '<i class="el-icon-download"></i>',
        extra_bottom_left: '<i class="el-icon-warning" /></i>',
        resizable: false,
      }
    );
    this.showingevents = this.demoExample.events;
    this.form.title = "Testing";
    this.form.start_time = moment(this.demoExample.events[0].start);
    this.form.end_time = moment(this.demoExample.events[0].end);
    this.form.desc = "摄影周回";
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
    padding: 4px 0px 4px 0px;
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
    background: #004c6d;
  }
  .download {
    background: #004c6d;
  }
  .error {
    background: #ffa600;
  }
  .default {
    background: #004c6d;
  }
  .shooting {
    background: #004c6d;
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
  .empty {
    background: transparent;
    color: black;
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
.vuecal__cell-events-count {
  background: transparent;
  width: 100%;
  padding-left: 20px;
}
.vuecal__cell-date {
}
.vuecal__event .empty {
  background: transparent;
}

.demo .vuecal__event {
  border: none;
}
</style>
