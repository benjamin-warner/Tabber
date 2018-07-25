/* eslint-disable */
const TabStore = {
  changeStack: [],
  tab:{
    spacer: '--',
    tuning: [
      'e',
      'B',
      'G',
      'D',
      'A',
      'E'
    ],
    measures: [
      {
      bars: [
      [
          [
            '00',
            '01',
            '02',
            '03',
            '04',
            '84'
          ],
          [
            '23',
            '05',
            '06',
            '07',
            '09',
            '85'
          ],
          [
            '45',
            '01',
            '02',
            '03',
            '09',
            '86'
          ],
          [
            '67',
            '05',
            '06',
            '07',
            '09',
            '87'
          ]
        ],
        [
          [
            '89',
            '11',
            '12',
            '13',
            '09',
            '88'
          ],
          [
            '10',
            '15',
            '16',
            '17',
            '09',
            '89'
          ],
          [
            '11',
            '11',
            '12',
            '13',
            '09',
            '90'
          ],
          [
            '12',
            '15',
            '16',
            '17',
            '09',
            '91'
          ]  
        ],
        [ 
          [
            '13',
            '21',
            '22',
            '23',
            '09',
            '92'
          ],
          [
            '14',
            '25',
            '26',
            '27',
            '09',
            '93'
          ],
          [
            '15',
            '21',
            '22',
            '23',
            '09',
            '94'
          ],
          [
            '16',
            '25',
            '26',
            '27',
            '09',
            '95'
          ]
        ],
        [
          [
            '17',
            '31',
            '32',
            '33',
            '09',
            '96'
          ],
          [
            '18',
            '35',
            '36',
            '37',
            '09',
            '97'
          ],
          [
            '19',
            '31',
            '32',
            '33',
            '09',
            '98'
          ],
          [
            '20',
            '35',
            '36',
            '37',
            '09',
            '99'
          ]
        ] // bar's beats
      ]// bars
    }] //measures
  },
  newBarTemplate: function(){
    return [
      [
        '--',
        '--',
        '--',
        '--',
        '--',
        '--'
      ],
      [
        '--',
        '--',
        '--',
        '--',
        '--',
        '--'
      ],
      [
        '--',
        '--',
        '--',
        '--',
        '--',
        '--'
      ],
      [
        '--',
        '--',
        '--',
        '--',
        '--',
        '--'
      ]
    ]
  }
}

export default TabStore