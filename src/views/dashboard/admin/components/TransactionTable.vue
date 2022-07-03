<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="订单编号" min-width="200">
      <template slot-scope="scope">
        {{ scope.row.order_no | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column label="价格" width="195" align="center">
      <template slot-scope="scope">
        ¥{{ scope.row.price | toThousandFilter }}
      </template>
    </el-table-column>
    <el-table-column label="状态" width="100" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { transactionList } from '@/api/remote-search'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      // transactionList().then(response => {
      //   this.list = response.data.items.slice(0, 8)
      // })
      this.list = [{
        'order_no': 'CE4bc62f-DFF3-5eBF-e8Fc-D6Ec06D1C6bc',
        'timestamp': 1029827261710,
        'username': 'Cynthia Clark',
        'price': 5983.17,
        'status': 'pending'
      }, {
        'order_no': 'b7Ab7b34-832D-73bb-9Be1-6f5DBDA6Ee7e',
        'timestamp': 1029827261710,
        'username': 'Linda Gonzalez',
        'price': 13849.6,
        'status': 'success'
      }, {
        'order_no': '5F964B8A-C0aD-eCCc-C7Cb-cba4DffBe3db',
        'timestamp': 1029827261710,
        'username': 'Nancy Moore',
        'price': 2337.3,
        'status': 'success'
      },
      {
        'order_no': 'ebA8dDB8-cBe4-D0ed-68b7-6894E9dF3927',
        'timestamp': 1029827261710,
        'username': 'Anna Johnson',
        'price': 13802.76,
        'status': 'success'
      },
      {
        'order_no': 'D01bf3Fe-A29A-efD9-3c33-6Ec975d8E5F3',
        'timestamp': 1029827261710,
        'username': 'Betty Hall',
        'price': 14655,
        'status': 'success'
      },
      {
        'order_no': '548AfC2D-dfc3-A7bc-4DdE-96e4eF2535d9',
        'timestamp': 1029827261710,
        'username': 'Betty Thomas',
        'price': 1033.1,
        'status': 'pending'
      },
      {
        'order_no': '392B057D-edD6-1B23-CbC4-E30513eB43dD',
        'timestamp': 1029827261710,
        'username': 'Sandra Lopez',
        'price': 9160.15,
        'status': 'success'
      },
      {
        'order_no': '2c75863E-4A88-4fEF-ef2e-5EaDbFf6Fe10',
        'timestamp': 1029827261710,
        'username': 'Brenda Wilson',
        'price': 1466,
        'status': 'success'
      },
      {
        'order_no': 'Ae6CfB9d-a3e2-6Ebf-bf38-61f01ab3DeDF',
        'timestamp': 1029827261710,
        'username': 'Jessica Anderson',
        'price': 14286.35,
        'status': 'success'
      },
      {
        'order_no': '4b7FB2B9-5c62-A6Bb-85Bf-39e2ef9929CD',
        'timestamp': 1029827261710,
        'username': 'Steven Martin',
        'price': 5310.8,
        'status': 'pending'
      },
      {
        'order_no': 'cABDaD72-D7a1-cAc6-edcf-a7FA5Cac1FdD',
        'timestamp': 1029827261710,
        'username': 'Sharon Brown',
        'price': 11912.3,
        'status': 'success'
      },
      {
        'order_no': 'bdd3fd65-3f9F-1F1A-0f7c-d9981BfbEd8D',
        'timestamp': 1029827261710,
        'username': 'David Thompson',
        'price': 6607.5,
        'status': 'success'
      },
      {
        'order_no': 'a77ebbe9-D3D0-E4b5-A25B-6516ef8B92c4',
        'timestamp': 1029827261710,
        'username': 'Edward Lopez',
        'price': 1856.55,
        'status': 'pending'
      },
      {
        'order_no': 'd4518C18-3C93-3564-70aC-44cCdBB8b63f',
        'timestamp': 1029827261710,
        'username': 'Michael Hall',
        'price': 13451,
        'status': 'success'
      },
      {
        'order_no': '1290B36D-7eb8-Bdb6-7BCA-cDd7EDEf7Ac7',
        'timestamp': 1029827261710,
        'username': 'Charles Brown',
        'price': 1526.3,
        'status': 'success'
      },
      {
        'order_no': '9DE13448-7dBC-6dB8-DE12-0CDF2C933A9e',
        'timestamp': 1029827261710,
        'username': 'John White',
        'price': 8165.3,
        'status': 'pending'
      },
      {
        'order_no': 'c3b8e68f-C9AF-BfE2-4AfD-319eFdaeEdfe',
        'timestamp': 1029827261710,
        'username': 'Susan Robinson',
        'price': 14377.29,
        'status': 'pending'
      },
      {
        'order_no': 'Ee1C3876-eEbB-bDf4-a1BD-A9396b23D1F3',
        'timestamp': 1029827261710,
        'username': 'Steven Miller',
        'price': 2071.88,
        'status': 'success'
      },
      {
        'order_no': '4bcCE6d5-C652-A65f-CfDF-ACe6Eb0f5261',
        'timestamp': 1029827261710,
        'username': 'Margaret Rodriguez',
        'price': 2956.7,
        'status': 'pending'
      },
      {
        'order_no': 'eE2e51a3-87fe-57A6-8c18-6CDAfd5B2442',
        'timestamp': 1029827261710,
        'username': 'Elizabeth Johnson',
        'price': 14410.57,
        'status': 'pending'
      }
      ]
    }
  }
}
</script>
