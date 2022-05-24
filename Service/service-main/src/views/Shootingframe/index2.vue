<template>
  <div class="dashboard-container">
    <el-row>
      <el-card
        :body-style="{ padding: '20px 20px 10px 20px' }"
        style="margin: 5px; margin-top: 15px"
        shadow="hover"
        class="box-card"
      >
        <el-form
          ref="form"
          :model="form"
          label-width="150px"
          style="width: 70%"
        >
          <el-form-item label="撮影枠ID">
            <el-input v-model="form.name" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="ユーザーID">
            <el-input v-model="form.name" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="衛星">
            <el-select
              value="S01"
              placeholder="衛星"
              clearable
              class="filter-item"
            >
              <el-option value="衛星 01">衛星 01</el-option>
              <el-option value="衛星 02">衛星 02</el-option>
              <el-option value="衛星 03">衛星 03</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="撮影日時">
            <el-row :gutter="5" type="flex" justify="flex-start">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder=""
                  v-model="form.date1"
                  style="width: 400px"
                ></el-date-picker>
              </el-col>
              <el-col
                class="line"
                :span="1"
                style="margin-left: 10px; font-size: 18px; margin-right: 5px"
                >~</el-col
              >
              <el-col :span="11">
                <el-date-picker
                  placeholder=""
                  type="date"
                  v-model="form.date2"
                  style="width: 400px"
                ></el-date-picker>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="撮影枠種別">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="スタンダード"></el-checkbox>
              <el-checkbox label="ムーブメント"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="撮影種別">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="予約"></el-checkbox>
              <el-checkbox label="リアルタイム"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="利用状況">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="未予約"></el-checkbox>
              <el-checkbox label="一時確保"></el-checkbox>
              <el-checkbox label="仮予約"></el-checkbox>
              <el-checkbox label="本予約"></el-checkbox>
              <el-checkbox label="利用済"></el-checkbox>
              <el-checkbox label="キャンセル"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="ダウンロード状況">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="未済"></el-checkbox>
              <el-checkbox label="一部済"></el-checkbox>
              <el-checkbox label="完了"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <el-button type="primary" style="float: right; margin-bottom: 20px"
          >检索</el-button
        >
      </el-card>
    </el-row>
    <el-row>
      <el-card
        :body-style="{ padding: '5px 5px 10px 5px' }"
        style="margin: 5px; margin-top: 15px"
        shadow="hover"
        class="box-card"
      >
        <el-row
          style="
            margin-bottom: -20px;
            margin-left: 15px;
            font-size: 16px;
            display: flex;
            align-items: center;
          "
        >
          <el-col :span="8">
            <p style="margin-left: 15px; margin-right: 15px; font-size: 16px">
              撮影枠情報
            </p></el-col
          >
        </el-row>

        <el-divider></el-divider>
        <el-card
          :body-style="{ padding: '0px' }"
          style="margin: 5px; margin-top: 15px"
          shadow="hover"
        >
          <el-table
            :data="tableData"
            border
            fit
            highlight-current-row
            style="width: 100%"
            @row-dblclick="handleDClick"
          >
            <el-table-column type="selection" width="55" align="center">
            </el-table-column>
            <el-table-column
              v-loading="loading"
              align="left"
              label="撮影枠ID"
              width="100"
              element-loading-text="確認中"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.frame_id }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="ユーザー ID" width="120">
              <template slot-scope="scope">
                <span>{{ scope.row.shooting_id }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="衛星">
              <template slot-scope="scope">
                <span>{{ scope.row.satellite_name }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="開始日時" width="180">
              <template slot-scope="scope">
                <span>{{ scope.row.start_date }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="終了日時" width="180">
              <template slot-scope="scope">
                <span>{{ scope.row.end_date }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="撮影枠種別" width="150">
              <template slot-scope="scope">
                <span>{{ scope.row.frame_type }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="撮影種別" width="150">
              <template slot-scope="scope">
                <span>{{ scope.row.shooting_type }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="利用状況" width="150">
              <template slot-scope="scope">
                <span>{{ scope.row.using_type }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="ダウンロード状況" width="150">
              <template slot-scope="scope">
                <span>{{ scope.row.shooting_status }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
        <div style="float:right;margin: 20px 5px">
          <el-button type="primary">予約キャンセル</el-button>
          <el-button type="danger">削除</el-button>
        </div>
      </el-card>
    </el-row>
    <el-row style="margin-top: 20px; padding: 5px" v-show="show_Type1">
      <el-card class="box-card" :body-style="{ padding: '5px 0px 10px 0px' }">
        <p
          style="
            margin-bottom: -10px;
            margin-left: 15px;
            margin-right: 15px;
            font-size: 16px;
          "
        >
          撮影枠詳細
        </p>
        <el-divider></el-divider>
        <div style="padding: 0px 10px 20px 20px; margin-top: 10px">
          <el-row style="width: 70%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                撮影枠 ID
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">11</div>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                予約 ID
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">0000000A</div>
            </el-col>
          </el-row>

          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                衛星
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <el-button type="text">Sphere-1</el-button>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                運用周回ID
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">5</div>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                ユーザーID
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <el-button type="text">101</el-button>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                撮影枠種別
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">スタンダード</div>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                撮影種別
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">リアルタイム</div>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                撮影可能日時
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">2023-03-08 15:56:01 ~ 2023-03-08 15:56:01</div>
            </el-col>
          </el-row>
          <el-row style="width: 70%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                利用状況
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">
                <el-tag>未予約</el-tag>
              </div>
            </el-col>
          </el-row>
          <el-row style="width: 70%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                ダウンロード状況
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">
                <el-tag>未済</el-tag>
              </div>
            </el-col>
          </el-row>
          <el-row style="width: 70%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                優先度
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">
                <el-tag type="danger">高</el-tag>
              </div>
            </el-col>
          </el-row>
          <div style="margin-top: 50px">
            <el-button type="primary">編集</el-button>
            <el-button type="primary">シーケンス</el-button>
            <el-button type="primary" @click="handleShootingData">撮影データ</el-button>
            <el-button type="primary">予約キャンセル</el-button>
            <el-button type="danger">削除</el-button>
          </div>
        </div>
      </el-card>
    </el-row>

    <el-row v-show="show_Type2">
      <el-card class="box-card" :body-style="{ padding: '5px 0px 10px 0px' }">
        <p
          style="
            margin-bottom: -10px;
            margin-left: 15px;
            margin-right: 15px;
            font-size: 16px;
          "
        >
          撮影枠詳細
        </p>
        <el-divider></el-divider>
        <div style="padding: 0px 10px 20px 20px; margin-top: 10px">
          <el-row style="width: 70%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                撮影枠 ID
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">11</div>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                予約 ID
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">0000000A</div>
            </el-col>
          </el-row>

          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                衛星
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <el-button type="text">Sphere-1</el-button>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                運用周回ID
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">5</div>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                ユーザーID
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <el-button type="text">101</el-button>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                撮影枠種別
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">スタンダード</div>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                撮影種別
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">リアルタイム</div>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                撮影可能日時
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">2023-03-08 15:56:01 ~ 2023-03-08 15:56:01</div>
            </el-col>
          </el-row>
          <el-row style="width: 70%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                利用状況
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">
                <el-tag>未予約</el-tag>
              </div>
            </el-col>
          </el-row>
          <el-row style="width: 70%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                ダウンロード状況
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">
                <el-tag>未済</el-tag>
              </div>
            </el-col>
          </el-row>
          <el-row style="width: 70%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                優先度
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">
                <el-tag type="danger">高</el-tag>
              </div>
            </el-col>
          </el-row>
          <div style="margin-top: 50px">
            <el-button type="primary">編集</el-button>
            <el-button type="primary">シーケンス</el-button>
            <el-button type="primary" @click="handleShootingData">撮影データ</el-button>
            <el-button type="primary">予約キャンセル</el-button>
            <el-button type="danger">削除</el-button>
          </div>
        </div>
      </el-card>
    </el-row>
    <el-row v-show="show_Type2">
      <el-card
        :body-style="{ padding: '5px 5px 10px 5px' }"
        style="margin: 5px; margin-top: 15px"
        shadow="hover"
        class="box-card"
      >
        <el-row
          style="
            margin-bottom: -20px;
            margin-left: 15px;
            font-size: 16px;
            display: flex;
            align-items: center;
          "
        >
          <el-col :span="8">
            <p style="margin-left: 15px; margin-right: 15px; font-size: 16px">
              分割枠
            </p></el-col
          >
        </el-row>

        <el-divider></el-divider>
        <el-card
          :body-style="{ padding: '0px' }"
          style="margin: 5px; margin-top: 15px"
          shadow="hover"
        >
          <el-table
            :data="tableData"
            border
            fit
            highlight-current-row
            style="width: 100%"
             @row-dblclick="handleDClick2"
          >
            <el-table-column type="selection" width="55" align="center">
            </el-table-column>
            <el-table-column
              v-loading="loading"
              align="left"
              label="ムーブメント枠 ID"
              width="160"
              element-loading-text="確認中"
             
            >
              <template slot-scope="scope">
                <span>{{ scope.row.shooting_id2 }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="ユーザー ID">
              <template slot-scope="scope">
                <span>{{ scope.row.shooting_id }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="撮影枠 ID">
              <template slot-scope="scope">
                <span>{{ scope.row.frame_id }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="開始日時">
              <template slot-scope="scope">
                <span>{{ scope.row.start_date }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="終了日時">
              <template slot-scope="scope">
                <span>{{ scope.row.end_date }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="利用状況">
              <template slot-scope="scope">
                <span>{{ scope.row.using_type }}</span>
              </template>
            </el-table-column>

            </el-table-column>
          </el-table>
        </el-card>
        <div style="margin: 20px 5px">
          <el-button type="primary">追加</el-button>
          <el-button type="primary">予約キャンセル</el-button>
          <el-button type="danger">削除</el-button>
        </div>
      </el-card>
    </el-row>
    <el-row v-show="show_Type3">
      <el-card class="box-card" :body-style="{ padding: '5px 0px 10px 0px' }">
        <p
          style="
            margin-bottom: -10px;
            margin-left: 15px;
            margin-right: 15px;
            font-size: 16px;
          "
        >
          ムーブメント枠詳細
        </p>
        <el-divider></el-divider>
        <div style="padding: 0px 10px 20px 20px; margin-top: 10px">
          <el-row style="width: 70%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                ムーブメント枠 ID
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">1</div>
            </el-col>
          </el-row>

          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                撮影枠 ID
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <el-button type="text">5</el-button>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                ユーザーID
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <el-button type="text">100</el-button>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                撮影可能日時
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">2023-03-08 15:56:01 ~ 2023-03-08 15:56:01</div>
            </el-col>
          </el-row>
          <el-row style="width: 70%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                利用状況
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">
                <el-tag type="success">予約</el-tag>
              </div>
            </el-col>
          </el-row>
          <div style="margin-top: 50px">
            <el-button type="primary">編集</el-button>
            <el-button type="primary" @click="handleShootingData">撮影データ</el-button>
            <el-button type="primary">予約キャンセル</el-button>
            <el-button type="danger">削除</el-button>
          </div>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { fetchList } from "@/api/videoresource";
import { fetchList as article_fetchList } from "@/api/article";
import { getList } from "@/api/satellite";

const lineChartData = {
  newVisitis: {
    expectedData: [
      3000, 3000, 3000, 3000, 6000, 3000, 3000, 3000, 3000, 4500, 4500, 3000,
    ],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130],
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130],
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130],
  },
};

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"]),
  },
  created() {
    this.fetchData();
    this.getList();
    this.getarticle_fetchList();
  },
  data() {
    return {
      list: null,
      show_Type1: false,
      show_Type2: false,
      show_Type3: false,
      data_list: null,
      listQuery: {
        page: 1,
        limit: 5,
        sort: "+id",
      },
      loading: false,
      stlist: null,
      lineChartData: lineChartData.newVisitis,
      checkList: [],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      tableData: [
        {
          start_date: "2022-04-19 14:27:22",
          frame_id: "11",
          shooting_id: "100",
          satellite_name: "Sphere-1",
          end_date: "2022-04-19 14:27:22",
          frame_type: "スタンダード",
          shooting_type: "リアルタイム",
          using_type: "未予約",
          shooting_status: "未計画",
        },
        {
          start_date: "2022-04-19 14:27:22",
          frame_id: "12",
          shooting_id: "100",
          satellite_name: "Sphere-1",
          end_date: "2022-04-19 14:27:22",
          frame_type: "ムーブメント",
          shooting_type: "予約",
          using_type: "仮予約",
          shooting_status: "完了",
        },
      ],
    };
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type];
    },
    getList() {
      this.loading = true;
      this.$emit("create"); // for test
      fetchList(this.listQuery).then((response) => {
        this.list = response.data.items;
        this.loading = false;
      });
    },
    getarticle_fetchList() {
      this.loading = true;
      this.$emit("create"); // for test
      article_fetchList(this.listQuery).then((response) => {
        this.data_list = response.data.items;
        this.loading = false;
      });
    },
    fetchData() {
      this.listLoading = true;
      getList().then((response) => {
        this.stlist = response.data.items;
        this.listLoading = false;
      });
    },
    handleDClick(row) {
      console.log(row);
      if (row.frame_id == 11) {
        this.show_Type1 = true;
        this.show_Type2 = false;
      } else {
        this.show_Type1 = false;
        this.show_Type2 = true;
      }
    },
    handleDClick2(row) {
      this.show_Type3 = true;
    },
    handleShootingData(){
      this.$router.push("/Shootingframe/resourcelist")
    }
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
    font-weight: 100;
  }
}
.box-card {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  &-text {
    font-size: 18px;
    line-height: 46px;
    font-weight: normal;
  }
}
</style>
